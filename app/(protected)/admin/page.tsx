"use client";
import { RoleGate } from "@/components/auth/RoleGate";
import { FormSuccess } from "@/components/FormSuccess";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { UserRole } from "@prisma/client";
import axios from "axios";
import { toast } from "sonner";
export default function AdminPage() {
  const onApiRouteClick = () => {
    axios
      .get("/api/admin")
      .then((response) => {
        if (response.data) {
          toast.success("Allowed API routes");
        } else if (response.status) {
          toast.error("Forbidden API routes");
        }
      })
      .catch(() => {
        console.log("Something went wrong");
      });
  };

  return (
    <Card className="w-[475px]">
      <CardHeader>
        <p className="text-2xl font-semibold text-center">Admin</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <RoleGate allowedRole={UserRole.admin}>
          <FormSuccess message="You are allowed to see this content!" />
        </RoleGate>
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md">
          <p className="text-sm font-medium">Admin-only API routes</p>
          <Button onClick={onApiRouteClick}>Click to test</Button>
        </div>

        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md">
          <p className="text-sm font-medium">Admin-only server action</p>
          <Button>Click to test</Button>
        </div>
      </CardContent>
    </Card>
  );
}
