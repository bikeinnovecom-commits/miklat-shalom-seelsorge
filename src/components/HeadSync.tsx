import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const titles: Record<string, string> = {
  "/": "Miklat Shalom — Seelsorge & Geistliche Begleitung",
  "/begleitung": "Unsere Begleitung — Miklat Shalom",
  "/geschichte": "Unsere Geschichte — Miklat Shalom",
  "/termine": "Terminkalender — Miklat Shalom",
  "/kontakt": "Kontakt — Miklat Shalom",
};

export default function HeadSync() {
  const { pathname } = useLocation();
  useEffect(() => {
    document.title = titles[pathname] ?? "Miklat Shalom";
  }, [pathname]);
  return null;
}
