<script>
import SectionHeader from "$components/SectionHeader.svelte";
import { ListGroup, ListGroupItem } from "@sveltestrap/sveltestrap";
</script>

<SectionHeader title="Software" />

<ListGroup flush>

	<ListGroupItem class="px-0 py-3">
		<div class="fw-bold fs-5">Pling</div>
		<p>Tool that uses rearrangement distances to build a relatedness network of plasmid genomes. Allows one to explore relatedness of plasmids in a way that respects the biological mechanisms through which they vary.</p>
		<p><strong>Code:</strong> <a href="https://github.com/iqbal-lab-org/pling" target="_blank">https://github.com/iqbal-lab-org/pling</a></p>
		<p><strong>Main Paper:</strong> <a href="https://www.microbiologyresearch.org/content/journal/mgen/10.1099/mgen.0.001300" target="_blank">https://www.microbiologyresearch.org/content/journal/mgen/10.1099/mgen.0.001300</a></p>
		<p class="mb-0"><strong>Protocols for how to use it:</strong> <a href="https://www.biorxiv.org/content/10.1101/2025.09.02.673752v1" target="_blank">https://www.biorxiv.org/content/10.1101/2025.09.02.673752v1</a></p>
	</ListGroupItem>

	<ListGroupItem class="px-0 py-3">
		<div class="fw-bold fs-5">LexicMap</div>
		<p>Alignment to millions of bacterial genomes, allowing BLAST-style queries to all current bacterial data (eg AllTheBacteria).</p>
		<p><strong>Code:</strong> <a href="https://github.com/shenwei356/LexicMap" target="_blank">https://github.com/shenwei356/LexicMap</a></p>
		<p><strong>Docs:</strong> <a href="https://bioinf.shenwei.me/LexicMap/" target="_blank">https://bioinf.shenwei.me/LexicMap/</a></p>
		<p class="mb-0"><strong>Paper:</strong> <a href="https://www.nature.com/articles/s41587-025-02812-8" target="_blank">https://www.nature.com/articles/s41587-025-02812-8</a></p>
	</ListGroupItem>

	<ListGroupItem class="px-0 py-3">
		<div class="fw-bold fs-5">Amira</div>
		<p>AMR gene identification from long reads, designed to correctly identify multi-copy genes.</p>
		<p><strong>Code:</strong> <a href="https://github.com/Danderson123/amira" target="_blank">https://github.com/Danderson123/amira</a></p>
		<p class="mb-0"><strong>Preprint:</strong> <a href="https://www.biorxiv.org/content/10.1101/2025.05.16.654303v2" target="_blank">https://www.biorxiv.org/content/10.1101/2025.05.16.654303v2</a></p>
	</ListGroupItem>

	<ListGroupItem class="px-0 py-3">
		<div class="fw-bold fs-5">Viridian</div>
		<p>Rigorous assembler for tiled amplicon sequencing of viruses.</p>
		<p><strong>Code:</strong> <a href="https://github.com/iqbal-lab-org/viridian" target="_blank">https://github.com/iqbal-lab-org/viridian</a></p>
		<p class="mb-0"><strong>Paper:</strong> <a href="https://www.nature.com/articles/s41592-025-02947-1" target="_blank">https://www.nature.com/articles/s41592-025-02947-1</a></p>
	</ListGroupItem>

	<ListGroupItem class="px-0 py-3">
		<div class="fw-bold fs-5">Mykrobe</div>
		<p>Tool for rapid light-weight analysis of Mycobacterium tuberculosis, Staphylococcus aureus, Shigella sonnei, Salmonella typhi and Salmonella enterica serotype Paratyphi B, giving species/lineage information and drug resistance predictions.</p>
		<p><strong>Code:</strong> <a href="https://github.com/Mykrobe-tools/mykrobe" target="_blank">https://github.com/Mykrobe-tools/mykrobe</a></p>
		<p class="mb-0"><strong>Papers:</strong> <a href="https://doi.org/10.1038/ncomms10063" target="_blank">DOI: 10.1038/ncomms10063</a>, <a href="https://doi.org/10.12688/wellcomeopenres.15603.1" target="_blank">https://doi.org/10.12688/wellcomeopenres.15603.1</a></p>
	</ListGroupItem>

	<ListGroupItem class="px-0 py-3">
		<div class="fw-bold fs-5">Pandora</div>
		<p>Bacterial genomes can be remarkably variable even within a species, leading to the concept of a pan-genome. With standard tools, it is only possible to study SNP/mutation variation in the parts of the genome that are shared across all samples in a cohort (the "core"). Using a new genome graph implementation, we developed a new tool, pandora, for joint analysis of SNP and gene-presence information in the entire bacterial pan-genomes. Pandora supports nanopore and illumina data.</p>
		<p><strong>Code:</strong> <a href="https://github.com/rmcolq/pandora" target="_blank">https://github.com/rmcolq/pandora</a></p>
		<p class="mb-0"><strong>Paper:</strong> <a href="https://doi.org/10.1186/s13059-021-02473-1" target="_blank">DOI: 10.1186/s13059-021-02473-1</a></p>
	</ListGroupItem>

	<ListGroupItem class="px-0 py-3">
		<div class="fw-bold fs-5">make_prg</div>
		<p>Python implementation of the Recursive-Cluster-Collapse algorithm described in the Pandora paper, builds genome graphs from either MSA or VCF. Used by both gramtools and pandora.</p>
		<p class="mb-0"><strong>Code:</strong> <a href="https://github.com/iqbal-lab-org/make_prg" target="_blank">https://github.com/iqbal-lab-org/make_prg</a></p>
	</ListGroupItem>

	<ListGroupItem class="px-0 py-3">
		<div class="fw-bold fs-5">Gramtools</div>
		<p>Tool for joint analysis of SNP/indel variation in cohorts, allowing analysis of mutations on different haplotypes and on alternate backgrounds to long deletions. The underlying data structure is a generalised BWT. Application has been focussed primarily on surface antigens in P. falciparum). Gramtools supports illumina data.</p>
		<p><strong>Code:</strong> <a href="https://github.com/iqbal-lab-org/gramtools" target="_blank">https://github.com/iqbal-lab-org/gramtools</a></p>
		<p class="mb-0"><strong>Paper:</strong> <a href="https://doi.org/10.1186/s13059-021-02474-0" target="_blank">DOI: 10.1186/s13059-021-02474-0</a></p>
	</ListGroupItem>

	<ListGroupItem class="px-0 py-3">
		<div class="fw-bold fs-5">Minos</div>
		<p>Tool for combining multiple callsets (VCF) made for the same sample using different variant callers (eg samtools, freebayes etc), and using a genome graph to adjudicate when the two callsets disagreed. Used heavily in the CRyPTIC project to analyse tens of thousands of M. tuberculosis genomes.</p>
		<p><strong>Code:</strong> <a href="https://github.com/iqbal-lab-org/minos" target="_blank">https://github.com/iqbal-lab-org/minos</a></p>
		<p class="mb-0"><strong>Paper:</strong> <a href="https://link.springer.com/article/10.1186/s13059-022-02714-x" target="_blank">https://link.springer.com/article/10.1186/s13059-022-02714-x</a></p>
	</ListGroupItem>

	<ListGroupItem class="px-0 py-3">
		<div class="fw-bold fs-5">Clockwork</div>
		<p>Tool which runs multiple (Illumina) variant callers (usually Cortex and samtools, but you could change that) with different strengths, and then combines the results rigorously using minos.</p>
		<p><strong>Code:</strong> <a href="https://github.com/iqbal-lab-org/clockwork" target="_blank">https://github.com/iqbal-lab-org/clockwork</a></p>
		<p class="mb-0"><strong>Paper:</strong> see the Minos paper above, where it is evaluated on M. tuberculosis, S. aureus and K. pneumoniae.</p>
	</ListGroupItem>

	<ListGroupItem class="px-0 py-3">
		<div class="fw-bold fs-5">Varifier</div>
		<p>Tool (introduced in the minos paper) for evaluating a VCF file of calls when you have a high quality truth assembly (as is common with bacteria – no issues with phasing calls). A probe is constructed for each record in the VCF, with flanking sequence from the reference genome (with nearby variants applied), and then this is mapped to the truth genome. This allows varifier to measure precision. Measuring recall depends on having reliable true variants; varifier can use minimap and nucmer to compare the reference genome and truth assembly and find a conservative "truth set" of variants (and uses the above probe method to filter the minimap+nucmer calls to exclude errors), and then uses that truth set to measure recall.</p>
		<p class="mb-0"><strong>Code:</strong> <a href="https://github.com/iqbal-lab-org/varifier/" target="_blank">https://github.com/iqbal-lab-org/varifier/</a></p>
	</ListGroupItem>

	<ListGroupItem class="px-0 py-3">
		<div class="fw-bold fs-5">BIGSI</div>
		<p>Tool for creating kmer index of large sets of microbial sequence data.</p>
		<p><strong>Code:</strong> <a href="https://github.com/iqbal-lab-org/BIGSI" target="_blank">https://github.com/iqbal-lab-org/BIGSI</a></p>
		<p><strong>Paper:</strong> <a href="https://pubmed.ncbi.nlm.nih.gov/30718882/" target="_blank">https://pubmed.ncbi.nlm.nih.gov/30718882/</a></p>
		<p class="mb-0">Note that if you want to build a BIGSI of many samples, the method outlined in the paper is quite memory intensive. We have a better method of merging indexes, documented on the <a href="https://github.com/iqbal-lab-org/BIGSI/wiki/Merging-BIGSIs" target="_blank">wiki</a>. However, BIGSI is quite outdated now and mostly of historical interest only.</p>
	</ListGroupItem>

	<ListGroupItem class="px-0 py-3">
		<div class="fw-bold fs-5">COBS</div>
		<p>High performance (faster and less disk use) C++ reimplementation with new ideas, of BIGSI.</p>
		<p><strong>Code:</strong> <a href="https://github.com/iqbal-lab-org/cobs" target="_blank">https://github.com/iqbal-lab-org/cobs</a></p>
		<p class="mb-0"><strong>Paper:</strong> <a href="https://arxiv.org/abs/1905.09624" target="_blank">https://arxiv.org/abs/1905.09624</a></p>
	</ListGroupItem>

	<ListGroupItem class="px-0 py-3">
		<div class="fw-bold fs-5">Cortex</div>
		<p>This rather venerable tool builds coloured de Bruijn graphs and uses them to detect variation between a sample and a reference, or between different samples.</p>
		<p><strong>Code:</strong> <a href="https://github.com/iqbal-lab/cortex" target="_blank">https://github.com/iqbal-lab/cortex</a></p>
		<p><strong>Paper:</strong> <a href="https://www.nature.com/articles/ng.1028" target="_blank">https://www.nature.com/articles/ng.1028</a></p>
		<p class="mb-0">Cortex is no longer actively developed but it is heavily used, in particular our group have analysed large cohorts of M. tuberculosis by using both cortex and samtools, and then combining the results with minos - this is packaged in Clockwork. We don't think there is a modern reimplementation of this tool - ska comes close, and uses similar ideas, so if you are interested only in SNPs, we would recommend you use that; we are not sure what the best recommendation is if you care about indels.</p>
	</ListGroupItem>

</ListGroup>
