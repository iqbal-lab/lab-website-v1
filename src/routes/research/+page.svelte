<script>
import Experience from "$components/Experience.svelte";
import SectionHeader from "$components/SectionHeader.svelte";
import { ListGroup } from "@sveltestrap/sveltestrap";
</script>

<SectionHeader title="Algorithm Development" />

<ListGroup flush>
	<Experience company="Pangenomes" url="">
		<ul class="timeline">
			<li>
				<div class="fw-bold">
					Bacterial pangenomes <span class="fw-normal text-muted small">(2013 &mdash;)</span>
				</div>
				Represent bacterial pangenome as a set of gene graphs (DAGs of minimizers) to allow gene detection and SNP calling in the whole pangenome, using Pandora, developed by Michael Hall, Leandro Lima and Rachel Colquhoun.
			</li>
			<li>
				<div class="fw-bold">
					Single and multicopy AMR gene detection from long reads<span class="fw-normal text-muted small">(2021-)</span>
				</div>
				Using gene de Bruijn graphs with a tool called Amira, developed by Dan Anderson
			</li>
			<li>
				<div class="fw-bold">
					Modelling a eukaryote pangenome as an ordered array of DAGs, encoded in a variant BWT<span class="fw-normal text-muted small">(2021)</span>
				</div>
				In our tool called gramtools, developed by Brice Letcher and Sorina Maciuca, we generalise the standard BWT to encode a genome plus variants, allowing mapping of reads to the pangenome. For the experts, a lot of interesting ideas in how to record support for individual SNPs buried in complex regions, and a new hierarchical JSON VCF format.
			</li>
		</ul>
	</Experience>

	<Experience company="Plasmid evolution" url="">
		<ul class="timeline">
			<li>
				<div class="fw-bold">Rearrangement distances</div>
				Our tool Pling, developed by Daria Frolova, encodes plasmids as lists of integer-encoded blocks of sequence, and measures genetic distances between them using the DCJ-indel rearrangement distance. Combined with a dual-layer network, this allows us to define "evolving units" for studying plasmids, and enables epidemiology
			</li>
			<li>
				<div class="fw-bold">Combining plasmid HGT and phylogenetics</div>
				This is an ongoing theme in the lab
			</li>
		</ul>
	</Experience>

	<Experience company="Indexing and Alignment" url="">
		<ul class="timeline">
			<li>
				<div class="fw-bold">K-mer indexing</div>
				An ongoing theme is developing methods to index large scale sets of genomes (or raw sequence data) for search. Originally developed BIGSI, a matrix of Bloom filters, then collaborated on a much more efficient implementation called COBS
			</li>
			<li>
				<div class="fw-bold">BLAST-style alignment to millions of bacterial genomes</div>
				Working with Wei Shen, we developed LexicMap, an aligner which indexes genomes by predefining a fixed (n=20,000) set of kmers, and then storing the best prefix-matching kmer within each genome. This allows alignment of a gene to 2 million genomes in seconds.
			</li>
		</ul>
	</Experience>

	<Experience company="Variant Calling" url="">
		<ul class="timeline">
			<li>
				<div class="fw-bold">Coloured de Bruijn graphs</div>
				Invented coloured DBGs as a means to compare genomes without the use of a reference back in 2009 for the 1000 Genomes Project, implemented in a tool called Cortex. Used it to call high quality indels, genotype HLA, build the first human pangenome.
			</li>
			<li>
				<div class="fw-bold">Combining multiple variant callers using graph adjudication</div>
				Working with Martin Hunt, developed minos, a tool which combines VCFs from different variant callers, to make a better VCF. Minos makes a gramtools graph of the variants in both VCFs and remaps reads to the graph to adjudicate. The clockwork variant caller combines cortex and samtools using minos.
			</li>
		</ul>
	</Experience>
</ListGroup>


<SectionHeader title="Evolution of bacteria and AMR" />

<ListGroup flush>
	<Experience company="Antimicrobial resistance" url="">
		<ul class="timeline">
			<li>
				<div class="fw-bold">
					Resistance prediction using coloured de Bruijn graphs <span class="fw-normal text-muted small">(2015-)</span>
				</div>
				Software called Mykrobe, developed by Martin Hunt and Phelim Bradley, works for Illumina and Nanopore data, for Mycobacterium tuberculosis, Staphylococcus aureus, Shigella sonnei, Salmonella typhi and Salmonella enterica serotype Paratyphi B.
			</li>
			<li>
				<div class="fw-bold">
					Improved resistance prediction for TB<span class="fw-normal text-muted small">(2021)</span>
				</div>
				DrPRG was designed as an improved version of Mykrobe by Michael Hall, based on Pandora's minimizer DAGs instead of Mykrobe's coloured de Bruijn graph. DrPRG only supports Mtb for the moment though.
			</li>
			<li>
				<div class="fw-bold">
					Genetic basis for resistance in TB <span class="fw-normal text-muted small">(2013 &mdash;)</span>
				</div>
				We spent 5 years, as part of the CRyPTIC project, collecting, sequencing and phenotyping over 12,000 clinical isolates of M. tuberculosis from around the world and publishing them as an open dataset. We focussed on how to best identify and jointly genotype genetic variants in the cohort, and enable our collaborators doing GWAS and ML on the data. This fed directly into the first version of the WHO Catalogue of TB resistance mutations.
			</li>
			<li>
				<div class="fw-bold">
					Single and multicopy AMR gene detection from long reads<span class="fw-normal text-muted small">(2021-)</span>
				</div>
				Using gene de Bruijn graphs with a tool called Amira, developed by Dan Anderson
			</li>
		</ul>
	</Experience>

	<Experience company="Plasmid evolution" url="">
		<ul class="timeline">
			<li>
				<div class="fw-bold">The Murray collection, and a new model for plasmid evolution</div>
				We studied a historical collection of bacterial isolates, and looked at how the plasmids within them evolved over the period when humans adopted antibiotics. A small proportion of plasmids took up antibiotic resistance genes, but the most interesting revelation was that plasmids seem to undergo a continual process of fusion and fragmentation, mediated by recombination, which continually generates diversity.
			</li>
		</ul>
	</Experience>
</ListGroup>


<SectionHeader title="Open datasets for the community" />

<ListGroup flush>
	<Experience company="Tuberculosis" url="">
		<ul class="timeline">
			<li>
				<div class="fw-bold">
					Genotypes and phenotypes for 12k isolates <span class="fw-normal text-muted small">(2015-)</span>
				</div>
				This dataset contains high quality SNP and indel calls for >12,000 samples, and MICs for 12 different drugs. See the Compendium paper in PLoS Biology (PMID: 35944069) for details.
			</li>
					</ul>
	</Experience>

	<Experience company="SARS-CoV-2" url="">
		<ul class="timeline">



			<li>
				<div class="fw-bold">
					Fixing pandemic-wide systematic errors in SARS-CoV-2 genomes <span class="fw-normal text-muted small">(2021)</span>
				</div>
				Two factors combined to create systematic errors in the world's SARS-CoV-2 genomes: the data came from a heterogeneous set of assembly pipelines, some of which were not designed for tiled amplicon data, and as the virus evolved and inevitably mutations arose in primer binding sites, the PCR scheme had to be updated. Thus waves of Variants of Concern were followed by waves of artefacts in the genomes. We developed a rigorous tiled-amplicon assembler, Viridian, and reprocessed all public SARS-CoV-2 data, built a new, more reliable phylogeny, and made all the data public. While doing this, we also recruited collaborators from the Global South to join us, and make the public corpus of genomes slightly more globally representative.
			</li>
					</ul>
	</Experience>


	<Experience company="All Prokaryotes!" url="">
		<ul class="timeline">
			<li>
				<div class="fw-bold">
					AllTheBacteria <span class="fw-normal text-muted small">(2013 &mdash;)</span>
				</div>
				We are co-leading (with John Lees) a community project to rigorously and uniformly assemble, annotate and make searchable, all the world's bacterial genomic data
			</li>
		</ul>
	</Experience>
</ListGroup>
