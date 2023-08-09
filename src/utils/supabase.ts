import type {
  SupabaseClient,
  SupabaseClientOptions,
} from "@supabase/supabase-js";
import { createClient } from "@supabase/supabase-js";

const GetSupabase = (access_token: string): SupabaseClient => {
  const options: SupabaseClientOptions<"public"> = {};

  if (access_token) {
    options.global = {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    };
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "",
    options
  );

  return supabase;
};

export default GetSupabase;
