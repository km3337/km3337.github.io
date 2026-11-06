'use client';

import { useEffect, useState } from 'react';
import { GOATCOUNTER_SITE } from './Analytics';

// Shows GoatCounter's total for one counted path, fetched in the browser so the
// static page stays current. Needs "Allow adding visitor counts on your
// website" turned on in GoatCounter's site settings. GoatCounter answers 404
// for a path with no hits yet, which shows as 0; other failures keep the
// fallback.
export function LiveCount({ path, fallback }: { path: string; fallback: string }) {
    const [value, setValue] = useState(fallback);

    useEffect(() => {
        const controller = new AbortController();
        fetch(`${GOATCOUNTER_SITE}/counter/${encodeURIComponent(path)}.json`, { signal: controller.signal })
            .then(async (response) => {
                if (response.status === 404) return setValue('0');
                if (!response.ok) return;
                const data: { count?: string } = await response.json();
                if (data.count) setValue(data.count);
            })
            .catch(() => {});
        return () => controller.abort();
    }, [path]);

    return <>{value}</>;
}
