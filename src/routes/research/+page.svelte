<script>
import Experience from "$components/Experience.svelte";
import SectionHeader from "$components/SectionHeader.svelte";
import { ListGroup } from "@sveltestrap/sveltestrap";
</script>

<SectionHeader title="Algorithm Development" />

<ListGroup flush>
	<Experience start="2012" company="Pangenomes" url="">
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
					Modelling a eukaryote pangenome as an ordered array of DAGs, encoded in a variant BWT<span class="fw-normal text-muted small">(2021)</span>
				</div>
				In our tool called gramtools, developed by Brice Letcher and Sorina Maciuca, we generalise the standard BWT to encode a genome plus variants, allowing mapping of reads to the pangenome. For the experts, a lot of interesting ideas in how to record support for individual SNPs buried in complex regions, and a new hierarchical JSON VCF format. 
			</li>

		</ul>
	</Experience>

	<Experience start="2021" end="" company="Plasmid evolution" url="">
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

	<Experience start="2021" end="" company="Indexing and Alignment" url="">
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

<Experience start="2012" end="" company="Variant Calling" url="">
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

<SectionHeader title="Education" />

<ListGroup flush>
	<Experience start="August 2012" end="May 2017" company="Graduate School of Biology" url="https://google.com">
		<div class="fw-bold">PhD in Biology</div>
		Studied the effect of XYZ...
	</Experience>
	<Experience start="September 2008" end="August 2012" company="School of Biological Biology" url="https://google.com">
		<div class="fw-bold">B.Sc. in Biology</div>
	</Experience>
</ListGroup>
