import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import { CurrencyComBox } from "./_components/CurrencyComBox";

async function WizardPage() {
  const user = await currentUser();
  if (!user) {
    return redirect("/sign-in");
  }
  return (
    <div
      className="container flex maw-w-2xl flex-col 
  items-center justify-between gap-4"
    >
      <div>
        <h1 className="text-center text-3xl text-white-1">
          welcome, <span className="ml-2 font-bold">{user.firstName}!</span>
        </h1>
        <h2 className="mt-4 text-center text-base text-muted-foreground text-white-1">
          Let &apos;s get started by setting up your currency
        </h2>
        <h3 className="mt-2 text-center text-sm text-muted-foreground text-white-1">
          You can change these settings at any time
        </h3>
      </div>
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-white-1">Currency</CardTitle>
          <CardDescription className="text-white-1">
            Set your default currency for transactions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CurrencyComBox />
        </CardContent>
      </Card>
      <Button className="w-full bg-white-1 text-black-2" asChild>
        <Link className="text-white-1" href={"/"}>
          I&apos;m done! Take me to the dashboard
        </Link>
      </Button>
    </div>
  );
}

export default WizardPage;
