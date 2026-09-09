"use client";

import { useParams } from "next/navigation";
import ProfileView from "@/components/profile-view";
import { Button } from "@/components/primitives";
import { studentOf, students } from "@/data/mock";

export default function PublicProfilePage() {
  const params = useParams<{ id: string }>();
  const student = studentOf(params.id);
  if (!student) {
    return (
      <div className="mx-auto grid min-h-[60vh] max-w-[1200px] place-items-center px-4 text-center md:px-6">
        <div>
          <div className="disp text-6xl text-accent">404</div>
          <h1 className="disp mt-4 text-2xl text-ink">BUILDER NOT FOUND</h1>
          <p className="mx-auto mt-2 max-w-sm text-sm text-ink-soft">
            That profile may have gone private. {students.length} others are
            building in public.
          </p>
          <div className="mt-6">
            <Button href="/research-hub" variant="deep">
              MEET THE BUILDERS
            </Button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <ProfileView student={student} />
    </div>
  );
}