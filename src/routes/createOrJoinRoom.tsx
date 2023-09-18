import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

const CreateOrJoinRoom = () => {
  return (
    <div>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>
            <h3 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-3xl">
              Taco<b>Bell</b>
            </h3>
          </CardTitle>
          <CardDescription>
            Appreciate your colleagues by giving out tacos.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">User Name</Label>
                <Input id="name" placeholder="Your name" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Join</Button>
          <Button>Create</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CreateOrJoinRoom;
