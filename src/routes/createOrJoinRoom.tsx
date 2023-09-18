import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

const CreateOrJoinRoom = () => {
  return (
    <div>
      CreateOrJoinRoom
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl">
        Taco<b>Bell</b>
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Once upon a time, in a far-off land, there was a very lazy king who
        spent all day lounging on his throne. One day, his advisors came to him
        with a problem: the kingdom was running out of money.
      </p>
      <div className="flex flex-col space-y-1.5">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          placeholder="Name of your project"
          className={"text-md height-10"}
        />
      </div>
      <div>
        <Label htmlFor="name">Name</Label>
        <Input id="name" placeholder="Name of your project" />
      </div>
      <Button>Button</Button>
    </div>
  );
};

export default CreateOrJoinRoom;
