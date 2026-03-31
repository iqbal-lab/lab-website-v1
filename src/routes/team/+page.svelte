<script>
import SectionHeader from "$components/SectionHeader.svelte";

const members = [
	{
		name: "Zamin Iqbal",
		photo: "/assets/zam.jpeg",
		description:
			"Zam is Professor of Algorithmic and Microbial Genomics at the University of Bath. He did a degree and PhD in Maths, and then worked for several years in start-up/software firms before moving into biology (and academia) to work on the 1000 Genomes Project. He did his postdoctoral work with Gil McVean at Oxford, was lucky enough to win a Wellcome/Royal Society Sir Henry Dale Fellowship, and spent several years as a PI at EMBL-EBI."
	},
	{
		name: "Trieu Le",
		photo: "/assets/trieu.jpg",
		description:
			"Trieu studied X, before doing a Masters in Y at the Wellcome Sanger Institute. Right now he is doing a PhD on integron and plasmid evolution."
	},
	{
		name: "Alexandria Harrott",
		photo: "/assets/alex.jpg",
		description:
			"Alex has previously worked on nanopore sequencing for P. falciparum, but now for her PhD works on plasmid evolution."
	},
	{
		name: "Loic Marmey",
		photo: "/assets/loic.jpg",
		description: "Loic works on new methods of genome assembly."
	}
];
</script>

<SectionHeader title="Team" />

<div class="team-list">
	{#each members as member}
		<div class="team-member">
			<img src={member.photo} alt="Photo of {member.name}" class="team-photo" />
			<div class="team-bio">
				<div class="fw-bold fs-5">{member.name}</div>
				<p class="mt-1">{member.description}</p>
			</div>
		</div>
	{/each}
</div>

<style>
	.team-list {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		margin-top: 1rem;
	}

	.team-member {
		display: flex;
		gap: 1.5rem;
		align-items: flex-start;
	}

	.team-photo {
		width: 150px;
		height: 150px;
		object-fit: cover;
		border-radius: 4px;
		flex-shrink: 0;
	}

	.team-bio {
		flex: 1;
	}

	@media (max-width: 600px) {
		.team-member {
			flex-direction: column;
		}

		.team-photo {
			width: 100%;
			height: auto;
		}
	}
</style>
