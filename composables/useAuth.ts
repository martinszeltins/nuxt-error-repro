
export function useAuth() {
    const authenticate = async () => {
        const { loadShippingProfilesInStore } = await useShippingProfiles()

        loadShippingProfilesInStore()
    }

    return {
        authenticate,
    }
}
