import { Avatar, Button } from "@flyui/core";
import { useIsomorphicLayoutEffect } from "@flyui/utils";

export default function Docs() {
  useIsomorphicLayoutEffect(() => {
    console.log("Acme docs page");
  }, []);
  return (
    <div>
      <h1>Acme Documentation</h1>.
      
      <Avatar />

      <Button>FlyUI Nude</Button>
      
      <Button className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">FlyUI Classy</Button>
      
      <button className="bg-slate-400">HTML One</button>
    </div>
  );
}
