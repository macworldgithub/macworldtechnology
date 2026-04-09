import { useState, useEffect } from "react";

/**
 * Custom hook that detects the user's country via IP geolocation.
 * Returns a lowercase ISO 3166-1 alpha-2 country code (e.g. "pk", "us", "au").
 * Falls back to "au" if detection fails.
 */
export function useDetectedCountry(fallback = "au"): string {
  const [country, setCountry] = useState(fallback);

  useEffect(() => {
    fetch("https://get.geojs.io/v1/ip/country.json")
      .then((res) => res.json())
      .then((data) => {
        if (data?.country) {
          setCountry(data.country.toLowerCase());
        }
      })
      .catch(() => {
        // Silently fall back to default country
      });
  }, []);

  return country;
}
