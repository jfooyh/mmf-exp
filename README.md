# Explainability-enhanced multi-modal pre-training 

1. Run docker

* Create Docker image 
```
sudo docker build -t mmf:mmf -f Dockerfile-dev .
```

```
sudo docker run --rm -it --shm-size=31000m --rm -v $(pwd):/app/src --network=host mmf:mmf bash
```

2. Download VCR dataset and put it in `.cache/torch/mmf/data/datasets/vcr`


---

MMF is a modular framework for vision and language multimodal research from Facebook AI Research. MMF contains reference implementations of state-of-the-art vision and language models and has powered multiple research projects at Facebook AI Research. See full list of project inside or built on MMF [here](https://mmf.sh/docs/notes/projects).

MMF is powered by PyTorch, allows distributed training and is un-opinionated, scalable and fast. Use MMF to **_bootstrap_** for your next vision and language multimodal research project by following the [installation instructions](https://mmf.sh/docs/). Take a look at list of MMF features [here](https://mmf.sh/docs/getting_started/features).

MMF also acts as **starter codebase** for challenges around vision and
language datasets (The Hateful Memes, TextVQA, TextCaps and VQA challenges). MMF was formerly known as Pythia. The next video shows an overview of how datasets and models work inside MMF. Checkout MMF's [video overview](https://mmf.sh/docs/getting_started/video_overview).


## Installation

Follow installation instructions in the [documentation](https://mmf.sh/docs/).

## Documentation

Learn more about MMF [here](https://mmf.sh/docs).

## Citation

If you use MMF in your work or use any models published in MMF, please cite:

```bibtex
@misc{singh2020mmf,
  author =       {Singh, Amanpreet and Goswami, Vedanuj and Natarajan, Vivek and Jiang, Yu and Chen, Xinlei and Shah, Meet and
                 Rohrbach, Marcus and Batra, Dhruv and Parikh, Devi},
  title =        {MMF: A multimodal framework for vision and language research},
  howpublished = {\url{https://github.com/facebookresearch/mmf}},
  year =         {2020}
}
```

## License

MMF is licensed under BSD license available in [LICENSE](LICENSE) file
