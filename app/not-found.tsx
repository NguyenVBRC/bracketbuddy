import { redirect } from "next/navigation";

export default async function Custom404() {
  const isOff = true;

  if (!isOff) {
    redirect("/");
  }
}
