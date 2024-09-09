import { FunctionReference } from "@/node_modules/convex/src/server";
import { useMutation } from "convex/react";
import { useState } from "react";

interface ApiMutationReturnType {
  pending: boolean;
  mutate: any;
}

/*
 * @description A hook to use a mutation from the API
 * @params mutation
 */

export function useApiMutation<Mutation extends FunctionReference<"mutation">>(
  mutation: Mutation
): ApiMutationReturnType {
  const [pending, setPending] = useState(false);
  const apiMutation = useMutation(mutation);
  const mutate = async (payload: Mutation["_args"]) => {
    setPending(true);
    return await apiMutation(payload)
      .catch((error: any) => {
        throw error;
      })
      .finally(() => setPending(false));
  };

  return { mutate, pending };
}
