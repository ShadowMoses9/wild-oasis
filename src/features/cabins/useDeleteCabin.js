import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabins } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useDeleteCabin() {
  const queryClient = useQueryClient();

  const { isLoading, mutate } = useMutation({
    mutationFn: deleteCabins,
    onSuccess: () => {
      toast.success("Succesfuly deleted");
      queryClient.invalidateQueries({
        queryKey: ["cabin"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isLoading, mutate };
}
