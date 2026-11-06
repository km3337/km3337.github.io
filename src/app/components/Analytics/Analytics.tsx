'use client';

import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

// GoatCounter: free, cookie-less page view counter (no consent banner needed).
// Dashboard: https://kmentor.goatcounter.com. It ignores localhost, so
// `npm run dev` visits aren't counted. The game page (public/flatbushTactics)
// loads the same counter from its own <head>, set in the Godot export preset.
export const GOATCOUNTER_SITE = 'https://kmentor.goatcounter.com';
export const GOATCOUNTER_ENDPOINT = `${GOATCOUNTER_SITE}/count`;

declare global {
    interface Window {
        goatcounter?: { count: (vars: { path: string }) => void };
    }
}

// Next.js changes pages without a full reload, so count each route change
// ourselves instead of letting count.js count once on load.
export function Analytics() {
    const pathname = usePathname();
    const lastCounted = useRef<string | null>(null);

    const count = (path: string) => {
        if (!window.goatcounter || lastCounted.current === path) return;
        lastCounted.current = path;
        window.goatcounter.count({ path });
    };

    useEffect(() => {
        count(pathname);
    }, [pathname]);

    return (
        <Script
            src="https://gc.zgo.at/count.js"
            data-goatcounter={GOATCOUNTER_ENDPOINT}
            data-goatcounter-settings='{"no_onload": true}'
            strategy="afterInteractive"
            onLoad={() => count(window.location.pathname)}
        />
    );
}
