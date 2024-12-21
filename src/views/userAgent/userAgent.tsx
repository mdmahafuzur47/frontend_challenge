import { BackToHome } from "@/components/backToHome/backToHome";
import { cookies } from "next/headers";
// import { useUserAgentContext } from "@/components/providers/userAgentProvider";

export const UserAgent = () => {
  // const { userAgent } = useUserAgentContext();
  //done by me
  const cookieStore = cookies();
  const userAgent = cookieStore.get("userAgent");
  console.log(userAgent);
  return (
    <div>
      <BackToHome />

      {userAgent && (
        <div className="flex font-mono font-semibold text-sm">
          <div className="border p-2">UserAgent</div>

          <div className="border p-2">{userAgent?.value}</div>
        </div>
      )}

      {!userAgent && <div>No user agent</div>}
    </div>
  );
};
