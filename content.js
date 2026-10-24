// Accepted publications only. Abstract summaries are paraphrased from the linked papers.
// Author order, contribution markers, venues, and paper URLs follow the supplied list.
window.siteContent = {
  publications: [
    {
      number: '01', venue: 'Accepted at NeurIPS 2026.',
      title: 'Conformal Prediction for Distribution-to-Distribution Regression',
      authors: 'Trung-Khang Tran*, Tuan A. Hoang*, Viet-Hoang Tran*, Tan Minh Nguyen.',
      url: 'https://www.dropbox.com/scl/fi/gh3uqdtpxrm548la6iiin/neurips2026_conformal_prediction_d2d.pdf?rlkey=bu53ejt7hg3tp05n1u123arco&st=69sagqtz&dl=0',
      abstract: 'Conformal prediction offers model-independent prediction sets with finite-sample coverage, but applying split conformal prediction directly to distribution-to-distribution regression can produce sets that are difficult to interpret, measure, or sample from. This work introduces a conformal method in an orthogonal basis representation, making prediction sets interpretable while retaining coverage guarantees. An adaptive extension achieves asymptotic conditional coverage under mild assumptions. Experiments on simulated and real data demonstrate the effectiveness of the framework.'
    },
    {
      number: '02', venue: 'Accepted at NeurIPS 2026.',
      title: 'Tree-Sliced Orlicz Integral Probability Metric',
      authors: 'Trung-Khang Tran*, Tuan A. Hoang*, Viet-Hoang Tran*, Tan Minh Nguyen.',
      url: 'https://www.dropbox.com/scl/fi/6x7cohe0ti81l2rnkultd/neurips2026_tsw_orlicz_ipm.pdf?rlkey=3j3y6fy1gescr5ms9f5sxnnsg&st=x4oay3gl&dl=0',
      abstract: 'Tree-sliced distances enable efficient distribution comparison, but standard constructions largely rely on first-order Wasserstein geometry and offer limited flexibility in how discrepancies are weighted. TS-Orlicz replaces the discrepancy on each tree with an Orlicz integral probability metric and averages over random tree systems. Choosing different Orlicz functions yields both Lp-like behavior and nonpolynomial geometries sensitive to large mass imbalances. The method retains important tree-sliced properties and supports efficient evaluation through explicit special cases or scalar optimization. An extension handles distributions on hyperspheres. Experiments in gradient flows, self-supervised learning, and diffusion-based generation show competitive or improved results at low computational cost.'
    },
    {
      number: '03', venue: 'Accepted at WSDM 2026.',
      title: 'MELCOT: A Hybrid Learning Architecture with Marginal Preservation for Matrix-Valued Regression',
      authors: 'Khang Tran, Hieu Cao, Thinh Pham, Nghiem Diep, Tri Cao, Binh Nguyen.',
      url: 'https://arxiv.org/pdf/2509.23315',
      abstract: 'Regression with high-dimensional, matrix-structured data requires models that preserve spatial relationships without excessive storage or computation. MELCOT combines a classical marginal-estimation component with a neural learnable-cost optimal transport component. Estimating the marginals preserves spatial structure, while learned transport costs capture richer global patterns. This hybrid design combines the efficiency of classical methods with the expressiveness of deep learning. Experiments across several datasets and application areas report improvements over the evaluated baselines while maintaining computational efficiency.'
    },
    {
      number: '04', venue: 'Accepted at ICLR 2026.',
      title: 'Revisiting Tree-Sliced Wasserstein Distance Through the Lens of the Fermat–Weber Problem',
      authors: 'Viet-Hoang Tran, Thanh Tran, Thanh Chu, Trung-Khang Tran, Duy-Tung Pham, Tam Le, Tan Minh Nguyen.',
      url: 'https://openreview.net/forum?id=kDqG03v05B&referrer=%5BAuthor%20Console%5D(%2Fgroup%3Fid%3DICLR.cc%2F2026%2FConference%2FAuthors%23your-submissions)',
      abstract: 'Tree-sliced Wasserstein distances compare distributions using tree-structured projections, providing an expressive and computationally efficient alternative to conventional sliced Wasserstein distances. This work examines an important difference in their sampling procedures: tree constructions use positional information as well as directions, allowing them to reflect data geometry more closely. The proposed Fermat–Weber Tree-Sliced Wasserstein distance exploits this information by incorporating geometric-median principles into tree construction. The resulting approach improves performance while retaining the low computational cost of tree-sliced methods. Experiments involving diffusion models and gradient flows support these benefits.'
    },
    {
      number: '05', venue: 'Accepted at ICLR 2026.',
      title: 'Tree-sliced Sobolev IPM',
      authors: 'Viet-Hoang Tran, Thanh Tran, Thanh Chu, Duy-Tung Pham, Trung-Khang Tran, Tam Le, Tan Minh Nguyen.',
      url: 'https://openreview.net/forum?id=HHNQSXaLkF&referrer=%5BAuthor%20Console%5D(%2Fgroup%3Fid%3DICLR.cc%2F2026%2FConference%2FAuthors%23your-submissions)',
      abstractSource: 'https://proceedings.iclr.cc/paper_files/paper/2026/hash/3942d2f7fc0a5af1bf70dcbdcf4c56aa-Abstract-Conference.html',
      abstract: 'Tree-sliced Wasserstein methods efficiently compare distributions after projecting them onto trees, but higher-order Wasserstein computations on trees can be prohibitively expensive. TS-Sobolev addresses this limitation by averaging regularized Sobolev integral probability metrics over random tree systems. The resulting metric is tractable for every order p ≥ 1, matches tree-sliced Wasserstein at p = 1, and retains the same computational complexity at higher orders. It therefore offers a practical replacement with a tunable order and more favorable properties for gradient-based learning. A spherical extension handles distributions on hyperspheres. Experiments demonstrate improvements in gradient flows, representation learning, generative modeling, and topic modeling.'
    },
    {
      number: '06', venue: 'Accepted at Journal of Computer Science.',
      title: 'Sparse Partial Optimal Transport via Quadratic Regularization',
      authors: 'Khang Tran*, Khoa Nguyen*, Anh Nguyen, Thong Huynh, Son Pham, Sy-Hoang Nguyen-Dang, Manh Pham, Bang Vo, Mai Ngoc Tran, Dung Luong.',
      url: 'https://arxiv.org/abs/2508.08476',
      abstract: 'Partial optimal transport relaxes the equal-mass requirement of conventional optimal transport, making it useful for datasets with unbalanced measures. However, commonly used entropic regularization produces dense transport plans, limiting its suitability when sparse correspondences are desirable. This work proposes quadratic-regularized partial optimal transport, or QPOT, to encourage sparsity directly. Evaluations on synthetic data and CIFAR-10, together with color-transfer and domain-adaptation tasks, demonstrate sparser plans and favorable empirical performance.'
    },
    {
      number: '07', venue: 'Accepted at SoICT 2025.',
      title: 'LGCA: Enhancing Semantic Representation via Progressive Expansion',
      authors: 'Cao Thanh Hieu, Tran Trung Khang, Pham Gia Thinh, Diep Tuong Nghiem, Nguyen Thanh Binh.',
      url: 'https://arxiv.org/pdf/2511.00419',
      abstract: 'Vision-language models such as CLIP achieve strong zero-shot image classification, but randomly selected image crops can create misleading matches between local visual features and text descriptions. Localized-Globalized Cross-Alignment (LGCA) addresses this by identifying salient regions and progressively expanding them. Its similarity measure combines information from the original and expanded views to capture local detail alongside broader context. The theoretical analysis establishes that repeated expansion preserves the time-complexity order of the underlying model. Experiments across diverse datasets show improved zero-shot classification compared with the evaluated state-of-the-art methods.'
    },
    {
      number: '08', venue: 'Accepted at CSoNet 2025.',
      title: 'CovHuSeg: An Enhanced Approach for Kidney Pathology Segmentation',
      authors: 'Huy Trinh*, Khang Tran*, Nam Nguyen, Tri Cao, Binh Nguyen.',
      url: 'https://arxiv.org/pdf/2411.18893?',
      abstract: 'Segmentation models can fail to capture geometric properties such as convexity and size, producing anatomically implausible predictions. CovHuSeg introduces a simple post-processing procedure for kidney glomeruli and other approximately ball-shaped targets. It uses shape constraints to eliminate holes and irregular masks that do not match plausible glomerular geometry. Experiments applying the procedure to several deep-learning segmentation models on kidney pathology images show accuracy improvements for every evaluated model.'
    }
  ],
  posts: [{ author: 'T. T. Khang', label: 'A first note · Sample post', title: 'Every notebook starts with a blank page.', body: 'Welcome to this little space on the internet.\n\nThis is where I’ll share research updates, ideas I’m thinking through, and the occasional interesting discovery. A less formal companion to my publications.\n\nMore soon.', category: 'Hello, world' }]
};
