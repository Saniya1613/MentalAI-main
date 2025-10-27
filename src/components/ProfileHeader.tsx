import { UserResource } from "@clerk/types";


const ProfileHeader = ({ user }: { user: UserResource | null | undefined }) => {
  if (!user) return null;
  return (
    <div className="mb-10 relative bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
        <div className="relative">
          {user.imageUrl ? (
            <div className="relative w-24 h-24 overflow-hidden rounded-2xl ring-4 ring-offset-4 ring-primary/20">
              <img
                src={user.imageUrl}
                alt={user.fullName || "Profile"}
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center ring-4 ring-offset-4 ring-primary/20">
              <span className="text-3xl font-bold text-white">
                {user.fullName?.charAt(0) || "U"}
              </span>
            </div>
          )}
          <div className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-green-500 border-4 border-white shadow-md"></div>
        </div>

        <div className="flex-1 w-full">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-3">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-1">
                {user.fullName}
              </h1>
              <p className="text-gray-600">
                {user.primaryEmailAddress?.emailAddress}
              </p>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-full">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <p className="text-sm font-medium text-green-700">Active</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfileHeader;
