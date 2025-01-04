import Container from "./Container";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import consts from "@/lib/consts";

type Props = {
  isStickyTop: boolean;
  children: ReactNode;
  heightInRems?: number;
};

function StickyBar({ isStickyTop, children, heightInRems = consts.STICKY_BAR_HEIGHT_IN_REMS }: Props) {
  return (
    <div
      style={{
        paddingTop: isStickyTop ? heightInRems + "rem" : 0,
        paddingBottom: isStickyTop ? 0 : heightInRems + "rem",
      }}
    >
      <div className={cn("fixed left-0 right-0 bg-white/90 backdrop-blur z-10", isStickyTop ? "top-0" : "bottom-0")}>
        <Container className="!py-0">
          <div className={cn(isStickyTop ? "border-b" : "border-t")} style={{ height: heightInRems + "rem" }}>
            {children}
          </div>
        </Container>
      </div>
    </div>
  );
}

export default StickyBar;
