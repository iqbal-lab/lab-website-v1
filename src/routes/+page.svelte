<script>
import { Row } from "@sveltestrap/sveltestrap";
import ProjectCard from "$components/ProjectCard.svelte";
import SectionHeader from "$components/SectionHeader.svelte";
import { meta_description, meta_image, meta_title, meta_url } from "$lib/config";
</script>

<svelte:head>
	<meta name="og:type" content="website" />

	<meta name="og:title" content={meta_title} />
	<meta name="twitter:title" content={meta_title} />

	<meta name="description" content={meta_description} />
	<meta name="og:description" content={meta_description} />
	<meta name="twitter:description" content={meta_description} />

	<meta name="og:url" content={meta_url} />
	<meta name="twitter:url" content={meta_url} />

	{#if meta_image}
		<meta name="og:image" content={meta_image} />
		<meta name="twitter:image" content={meta_image} />
	{/if}
</svelte:head>

<div class="d-flex bg-light p-4 fs-5 rounded-3 border border-2 border-primary-subtle">
	<div class="align-middle pe-3">
		<img height="60" src="/assets/headshot.jpg" alt="That's me :)" />
	</div>
	<div>
		The Iqbal Lab at the <a href="https://google.com" target="_blank">Milner Centre for Evolution, Bath</a>
		<p class="small text-muted mb-0">Developing algorithms to study genome evolution, and applying them to microbes.</p>
	</div>
</div>

<SectionHeader title="What's New" />

<Row cols={{ xl: 3, lg: 3, md: 2, sm: 1, xs: 1 }}>
	<!-- Photo by <a href="https://unsplash.com/@xteemu">Teemu Paananen</a> on <a href="https://unsplash.com/photos/pic-bzdhc5b3Bxs">Unsplash</a> -->
	<ProjectCard
		name="📝 AllTheBacteria data now available on AWS"
		date="May 2025"
		url="/articles/install-xyz"
		img="/assets/talk.jpg"
		description="Now you can align your favourite gene to 2 million bacteria on AWS..."
	/>

	<!-- Photo by <a href="https://unsplash.com/@chuttersnap">CHUTTERSNAP</a> on <a href="https://unsplash.com/photos/pic-UmncJq4KPcA">Unsplash</a> -->
	<ProjectCard
		name="🗞️ Our paper on Phylogenetic Compression is published"
		date="April 2025"
		url="https://google.com"
		img="/assets/plants.jpg"
		description="Genomes are not random strings; using evolution to improve data compression."
	/>
</Row>
