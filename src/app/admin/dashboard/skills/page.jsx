import { getSkills } from "@/actions/admin";

export const dynamic = "force-dynamic";

import { SkillForm } from "@/components/admin/SkillForm";
import { SkillList } from "@/components/admin/SkillList";

export default async function SkillsPage() {
    const skills = await getSkills();

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold">Skills</h1>
                    <p className="text-foreground/60">Manage your technical skills</p>
                </div>
                <SkillForm />
            </div>

            <SkillList skills={skills} />
        </div>
    );
}
