<script>
import SectionHeader from "$components/SectionHeader.svelte";

const members = [
	{
		name: "Zamin Iqbal",
		photo: "/assets/zam.jpeg",
		description:
			"Zam is Professor of Algorithmic and Microbial Genomics at the University of Bath. His research broadly encompasses bioinformatic algorithms for studing the evolution and epidemiology of bacteria, though often the methods become intrinsicly interesting. He originally did a degree and PhD in Maths, and then worked for several years in start-up/software firms before moving into biology (and academia) to work on the 1000 Genomes Project. He did his postdoctoral work with Gil McVean at Oxford, spent several years as a PI at EMBL-EBI, and moved to Bath in 2024. He is sometimes to be seen on social media (Bluesky) with a cartoon avatar holding a macchiato."
	},
	{
		name: "Martin Hunt",
		photo: "/assets/martin.jpg",
		description:
			"Martin is a veteran bioinformatician, having worked on bacterial assembly, variant calling and AMR analysis. He was senior bioinformatician in the group for many years when it was based in EBI, and now works as an external member, formally at the Wellcome Sanger Institute. "
	},
	{
		name: "Trieu Le",
		photo: "/assets/trieu-better.png",
		description:
			"Trieu worked at the Oxford University Clinical Research Unit in Vietnam, before doing an MPhil in Genomics at the University of Cambridge. Right now he is doing a PhD on integron and plasmid evolution."
	},
	{
		name: "Alexandria Harrott",
		photo: "/assets/alex.jpg",
		description:
			"Alex worked on nanopore sequencing for P. falciparum prior to joining the group. During the first year of her PhD she worked on recombination in S. pneumoniae, and now has moved over to studying plasmid evolution."
	},
	{
		name: "Loic Marmey",
		photo: "/assets/loic.jpg",
		description: "Loic works on methods you would not expect for genome assembly; watch this space for some surprises."
	}
];

const alumni = [
	{
		name: "Daria Frolova (2021–2025)",
		photo: "/assets/daria.png",
		description:
			"Daria worked on methods for studying plasmid evolution, and has moved on to a postdoc in Switzerland."
	},
	{
		name: "Daniel Anderson (2021–2025)",
		photo: "/assets/dan.jpg",
		description:
			"Dan developed new algorithms for AMR gene assembly from long reads using large alphabet de Bruijn graphs. He has moved on to work in a bioinformatics start-up."
	},
	{
		name: "Adrian Cazares (2020–2023)",
		photo: "/assets/adrian.png",
		description:
			"Adrian had a joint postdoctoral position in this lab, and that of Nick Thomson at the Wellcome Sanger Institute. He analysed the evolution of the plasmids in the Murray Collection, a set of ~350 bacterial isolates collected between 1917 and 1953, over the subsequent 100 years. He subsequently moved to a Staff Scientist position at the Sanger."
	},
	{
		name: "Leandro Lima (2019–2023)",
		photo: "/assets/leandro.png",
		description:
			"Leandro was senior software developer in the lab, during which time he was absolutely pivotal in the development and optimisation of our code, and the training of the group. He moved on to a position in the Chan Zuckerberg Biohub."
	},
	{
		name: "Leah Roberts (2018–2023)",
		photo: "/assets/leah.png",
		description:
			"Leah had a joint EBI/Cambridge postdoctoral position, working on AMR spread in Vietnam, TB and developing new methods for studying plasmids. She moved to take up a lecturer position in Brisbane."
	},
	{
		name: "Kerri Malone (2017–2022)",
		photo: "/assets/kerri.png",
		description:
			"Kerri worked, as a postdoctoral researcher, on the CRyPTIC project, co-leading the writing of the main data paper, while also studying the evolution of growth rate in M. tuberculosis. She moved on to a postdoc position at Oxford."
	},
	{
		name: "Brice Letcher (2018–2022)",
		photo: "/assets/brice.jpeg",
		description:
			"Brice did a PhD developing a new pangenome data structure, in the tool gramtools, and used it to study evolution of Plasmodium falciparum, the parasite responsible for malaria. He has moved on to do a postdoc, changing field to epigenetics, in France."
	},
	{
		name: "Michael Hall (2017–2021)",
		photo: "/assets/michael.jpeg",
		description:
			"During his PhD, Michael co-developed Pandora, a pangenome tool for studying bacteria, and then used it to build a new state-of-the-art tool for predicting antibiotic resistance in M. tuberculosis. He moved on to a postdoc in Australia."
	},
	{
		name: "Rachel Colquhoun (2015–2019)",
		photo: "/assets/rachel.jpeg",
		description:
			"During her PhD, Rachel developed a new approach for encoding a pangenome, and used it to develop an approach for studying bacterial genomes. She moved on to a postdoc in Edinburgh."
	},
	{
		name: "Sorina Maciuca (2014–2018)",
		photo: "/assets/sorina.jpeg",
		description:
			"During her PhD, Sorina developed a modified Burrows Wheeler Transform for encoding genetic variation, and showed it could be used to study challenging genetic variation in P. falciparum. She moved into bioinformatics in industry."
	},
	{
		name: "Phelim Bradley (2014–2018)",
		photo: "/assets/phelim.png",
		description:
			"Phelim did a PhD, using coloured de Bruijn graphs as the basis for a drug resistance predictor (Mykrobe), and applied it particularly to TB. He also developed the first kmer index able to encode large scale bacterial data. Phelim moved on to start his own company."
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

<SectionHeader title="Alumni" />

<img src="/assets/iqbal_lab_4-3.png" alt="Iqbal Lab group back when it was at EBI" class="img-fluid mb-4" />

<div class="team-list">
	{#each alumni as member}
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
