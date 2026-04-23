import { DashboardLayout } from "@/components/layout/DashboardLayout";

const Field = ({ label, value }: { label: string; value: string }) => (
  <div>
    <label className="mb-1 block text-sm text-primary">{label}</label>
    <input defaultValue={value} className="w-full border-0 border-b border-border bg-transparent py-2 text-foreground outline-none focus:border-primary" />
  </div>
);

const Profile = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6 sm:space-y-8">
        <h2 className="text-2xl font-bold text-foreground sm:text-3xl">My Profile</h2>

        <div className="grid gap-6 md:grid-cols-2">
          <Field label="Username" value="vaibhav.more_24uce@sanjivani.edu.in" />
          <Field label="Email" value="vaibhav.more_24uce@sanjivani.edu.in" />
          <Field label="Firstname" value="VAIBHAV SANTOSH" />
          <Field label="Surname" value="MORE" />
          <Field label="City/ Town" value="abc" />
          <div>
            <label className="mb-1 block text-sm text-primary">Country</label>
            <select className="w-full border-0 border-b border-border bg-transparent py-2 text-foreground/60 outline-none focus:border-primary">
              <option>Select a country...</option>
              <option>India</option>
              <option>United States</option>
            </select>
          </div>
          <div>
            <label className="mb-1 block text-sm text-primary">Timezone</label>
            <select className="w-full border-0 border-b border-border bg-transparent py-2 text-foreground outline-none focus:border-primary">
              <option>Asia/Kolkata</option>
            </select>
          </div>
        </div>

        <div>
          <h3 className="mb-3 text-xl font-bold text-foreground sm:text-2xl">My Photo</h3>
          <div className="flex h-32 w-32 items-center justify-center rounded-2xl border-2 border-dashed border-border text-center text-sm text-foreground/40 sm:h-40 sm:w-40">
            Upload photo
          </div>
        </div>

        <button className="w-full rounded-full bg-primary px-8 py-2.5 font-semibold text-primary-foreground hover:opacity-90 sm:w-auto">
          Save changes
        </button>
      </div>
    </DashboardLayout>
  );
};

export default Profile;
