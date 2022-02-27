import { Button } from "@flyui/core";
import { useIsomorphicLayoutEffect } from "@flyui/utils";

export default function Docs() {
  useIsomorphicLayoutEffect(() => {
    console.log("Acme docs page");
  }, []);
  return (
    <div>
      <h1>Acme Documentation</h1>.
      
      <button className="bg-slate-400">Click me</button>
      <Button onClick={()=>alert("Hi")}>Click me</Button>
    </div>
  );
}
