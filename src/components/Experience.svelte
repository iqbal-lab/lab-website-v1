<script>
import { ListGroupItem } from "@sveltestrap/sveltestrap";
import { format, formatDistanceStrict } from "date-fns";

let { start = null, end = null, company = null, url = null, image = null, children } = $props();

const startDate = start ? new Date(start) : null;
const endDate = end ? new Date(end) : new Date();
const nbYears = startDate ? formatDistanceStrict(startDate, endDate) : null;
</script>

<ListGroupItem class="px-0 py-3">
	<h5 class="mt-1 mb-1">
		{#if image}
			<img class="me-1" width="35" height="35" src={image} alt="Logo for {company}" />
		{/if}
		<a class="text-decoration-none" href={url} target={!url ? null : "_blank"}> {company} </a>
	</h5>

	{#if startDate}
		<small class="text-muted fw-light">
			{format(startDate, "MMMM yyyy")}
			&mdash;
			{#if end}
				{format(endDate, "MMMM yyyy")}
			{:else}
				Present
			{/if}
			{#if end}
				<strong>({nbYears})</strong>
			{/if}
		</small>
	{/if}

	{@render children?.()}
</ListGroupItem>
