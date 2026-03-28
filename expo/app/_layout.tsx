import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { trpc, trpcClient } from "@/lib/trpc";

export const unstable_settings = {
  initialRouteName: "index",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

// Create a client
const queryClient = new QueryClient();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (error) {
      console.error(error);
      throw error;
    }
  }, [loaded]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <StatusBar style="light" />
        <Stack screenOptions={{ headerShown: false, animation: "fade" }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="main-menu" />
          <Stack.Screen name="game/new-game" />
          <Stack.Screen name="game/main" />
          <Stack.Screen name="game/character-creation" />
          <Stack.Screen name="game/inventory" options={{ presentation: "modal" }} />
          <Stack.Screen name="game/character" options={{ presentation: "modal" }} />
          <Stack.Screen name="game/map" options={{ presentation: "modal" }} />
          <Stack.Screen name="game/quests" options={{ presentation: "modal" }} />
          <Stack.Screen name="game/companions" options={{ presentation: "modal" }} />
          <Stack.Screen name="game/shop" options={{ presentation: "modal" }} />
          <Stack.Screen name="game/cheats" options={{ presentation: "modal" }} />
          <Stack.Screen name="game/settings" options={{ presentation: "modal" }} />
          <Stack.Screen name="game/save" options={{ presentation: "modal" }} />
          <Stack.Screen name="game/load" options={{ presentation: "modal" }} />
          <Stack.Screen name="settings" options={{ presentation: "modal" }} />
        </Stack>
      </QueryClientProvider>
    </trpc.Provider>
  );
}