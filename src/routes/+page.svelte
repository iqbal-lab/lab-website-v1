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

<div class="bg-light p-4 rounded-3 border border-2 border-primary-subtle">
	<div class="d-flex align-items-center mb-3">
		<img height="60" class="me-3" src="/assets/temp-zam.png" alt="That's me :)" />
		<span class="fs-5">Welcome to the website of the Iqbal Lab at the Milner Centre for Evolution, Bath!</span>
	</div>
	<p class="mb-0">We are a computational research group working on two fronts: half of us study the evolution of bacteria and antibiotic resistance, and half develop new algorithms and
computational data structures for comparing and searching through genomes. We love data, algorithms and bacteria! We all come to this
from different backgrounds and meet in the middle - we have had microbiologists, mathematicians, computer scientists and physicists in the team, and benefitted from our diversity. We are also proponents of open data, and work collaboratively to build high quality datasets
for the benefit of the community.</p>
</div>

<SectionHeader title="What's New" />

<Row cols={{ xl: 3, lg: 3, md: 2, sm: 1, xs: 1 }}>
	<ProjectCard
		name="Feb 2026: Our paper on fixing systematic errors in the SARS-CoV-2 phylogeny is published!"
		url="https://www.nature.com/articles/s41592-025-02947-1"
		img="/assets/viridian.png"
		description="Martin Hunt developed a rigorous tiled-amplicon assembler, Viridian, reassembled all open SARS-CoV-2 data and with Russ Corbett-Detig's team constructed a new, better phylogeny. Great collaboration releasing many genomes from the Global South."
	/>
	<ProjectCard
		name="Feb 2026: Over 17 million new protein structure predictions from our AllTheBacteria consortium shared publicly via the AlphaFold database"
		url="https://www.ebi.ac.uk/about/news/updates-from-data-resources/alphafold-database-community-datasets/"
		img="/assets/alphafold.png"
		description=""
	/>
	<ProjectCard
		name="Nov 2025: The Genetics Society announces that Zam will be awarded the 2026 Mary Lyon Medal"
		url="https://genetics.org.uk/medals-and-prizes/genetics-society-medals-and-lectures/mary-lyon-medal/mary-lyon-medal-2026-prof-zamin-iqbal/"
		description="While this is very welcome, Zam wants to emphasise that he has been lucky to have supportive mentors, and incredibly talented PhD students and postdocs, without whom this would not have happened."
	/>
	<ProjectCard
		name="Sept 2025: Our paper on alignment to millions of prokaryotic genomes is published!"
		url="https://www.nature.com/articles/s41587-025-02812-8"
		img="/assets/lexicmap.png"
		description="New algorithm allows alignment of a gene to 2 million genomes in AllTheBacteria in seconds. Amazing work led by Wei Shen."
	/>
		<ProjectCard
		name="Sept 2025: Zam interviewed on the BBC Science in Action radio show"
		url="https://www.bbc.co.uk/sounds/play/w3ct6yfx"
		description="Discussing the Murray Collection study of plasmid evolution; interview starts about 12 minutes in"
	/>
	<ProjectCard
		name="Sept 2025: Our paper on plasmid evolution over the antibiotic epoch is published!"
		url="https://www.science.org/doi/10.1126/science.adr1522"
		img="/assets/murrays.png"
		description="Led by postdoc in the lab Adrian Cazares, collaborative work with Nick Thomson at the Sanger Institute."
	/>
	<ProjectCard
		name="April 2025: Our paper on Phylogenetic Compression is published!"
		url="https://www.nature.com/articles/s41592-025-02625-2"
		img="/assets/miniphy.png"
		description="Genomes are not random strings; using evolutionary information to improve compression. Karel Brinda led this, a collaboration also with Mike Baym."
	/>
</Row>
