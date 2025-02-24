import { useMutation } from "@tanstack/react-query";
import { joinApi } from "../apis/authApi";

export const useJoinMutation = () => useMutation({
    mutationKey: ["joinMutation"],
    mutationFn: joinApi,
    retry: 0,       // 재요청 X
});