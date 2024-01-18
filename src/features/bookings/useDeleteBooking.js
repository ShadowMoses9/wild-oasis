import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useDeleteBooking() {
  const queryClient = useQueryClient();

  const { isLoading: isDeletingBooking, mutate: deletedBooking } = useMutation({
    mutationFn: deleteBooking,
    onSuccess: () => {
      toast.success("Succesfuly deleted");
      queryClient.invalidateQueries({
        queryKey: ["bookings"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeletingBooking, deletedBooking };
}
