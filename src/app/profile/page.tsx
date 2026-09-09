import ProfileView from "@/components/profile-view";
import { students } from "@/data/mock";

export default function ProfilePage() {
  return (
    <div>
      <ProfileView student={students[0]} self />
    </div>
  );
}