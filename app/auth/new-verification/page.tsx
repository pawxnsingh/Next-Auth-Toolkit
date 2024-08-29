import { NewVerificationForm } from "@/components/auth/NewVerificationForm";
import { Suspense } from "react";

export default function NewVerificationPage() {
  return (
    <div>
      <Suspense>
        <NewVerificationForm />
      </Suspense>
    </div>
  );
}
