import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useAddCabin() {
  const queryClient = useQueryClient();

  const { mutate: addCabin, isLoading } = useMutation({
    mutationFn: addEditCabin,
    onSuccess: () => {
      toast.success("New cabin successfully created");
      queryClient.invalidateQueries({ queryKey: ["cabin"] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { addCabin, isLoading };
}
