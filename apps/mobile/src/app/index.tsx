import { View, Text, ActivityIndicator } from "react-native";
import { HealthCheckResponse } from "@food-delivery/types";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/axios";

export default function HomeScreen() {
  const {
    data: health,
    error,
    isLoading,
  } = useQuery<HealthCheckResponse>({
    queryKey: ["health"],
    queryFn: () =>
      api.get<HealthCheckResponse>("/health").then((res) => res.data),
  });

  return (
    <View className="flex-1 items-center justify-center p-24">
      <Text className="text-4xl bg-red-500">Food Delivery</Text>
      <Text>Connection Text</Text>

      {isLoading && <ActivityIndicator size="large" color="#ff6b35" />}

      {health && (
        <View>
          <Text>API Status: {health.status}</Text>
          <Text>{new Date(health.timestamp).toLocaleString()}</Text>
        </View>
      )}

      {error && (
        <View>
          <Text>Couldn't not reach the API. is the server running?</Text>
        </View>
      )}
    </View>
  );
}
