import TestClient from "@/components/TestClient";
import { getRemoteUrl } from "@/helpers/utils";
import dynamic from "next/dynamic"
import { cookies } from "next/headers";
const Map = dynamic(() => import("@/components/Map"), {
	ssr: false,
})

export default async function Dashboard() {
	const res = await fetch(getRemoteUrl(), {
		method: "GET",
		cache: "no-store"
	});
	if (!res.ok) {
		return <div>Error {res.status}: {res.statusText}</div>
	}
	const data = await res.json();

	return (
		<div className="w-full grow-1">
			<Map></Map>
			<div>
				<p>Response from remote server: {data}</p>
				<p>------------------------------------------------------</p>
				<TestClient></TestClient>
			</div>
		</div>
	);
}