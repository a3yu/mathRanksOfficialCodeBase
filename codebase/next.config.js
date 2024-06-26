const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});
module.exports = withMDX({
  pageExtensions: ["js", "jsx", "md", "mdx"],
});
module.exports = {
  reactStrictMode: true,
  experimental: {},
  env: {
    GOOGLE_PRIVATE_KEY:
      "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCqdj6PN/Wb0Arr\ncwOHsoDw6o83LRdCQoFpaKGzvVnRBa772JpPQq+fzJZUEPILOQk83/tKwbrSuq/n\n9LfRqX/rIA8ldXuSLF136gI6BZ+BU1RmCJjZazjwW6PWBm4t9Po/Rqp3KodUGVbQ\nL8rOMVDBXa/Zjn7dD2/R5WUsBZQsdxO9jI+FGc5/0qn7F5wT14/+j1Ue29xEb5vW\nRWoLBGHQg+OU1ZdP17g0+65WIXXK1u1XXn+oxYnx+RCsWkCcabxL59xB5H4D5wEw\neqx575oHcVcXaMP+OZmgr+HWj465akRYFr7YnUDQcnqt8UEaiQUVSfNlaiy/amsu\nRlocJJ41AgMBAAECggEAQUNXTVcT8m1TGPUmd1g49MQhQ/NAEe7LhFN6gYnv7s6Z\nwbOa1NjHy8s1DQeV3AUgy81HdUY55H90ZL71d9DI+HkEQ4e44WyZ9pTB+Hv5pzaD\nvDLzbl6WZLP5RLKekXrXKs2/6zL9sA2phridkZcg/3+Cma1sVe+YlMialSGnquPm\nCE4Ivl47ysHlMf9tfWdCNlfT+pkMcnutdPqNiDQ9nHaJ/v1ysOd5il9/l2H3oeAX\n0i6sIIEv4f4EVUpzVj7M6CG2FQm2ZlJQ6rfX4FW5k0QdNCSPIZGFVZrA+SVIX8Qz\nbO1KGUGywmjGIQfkxg/88WJR5C424tiwzEkdqtzDGwKBgQDeJgULFd3Uv0wFatqS\nX75GdcwDyz07C5SnFzCXtBvRw6yRDhf6M9CO4JfxsMpK93A0PkrNFWp5yqkBbjxs\nF67MnVa2QNE1yZSTBSQD728xlEia1Y4xyuDcMQsPJ7SmIficPWrlae0AzJjMFXsF\nBkVds0q4AofXSEX5xkM9CI5m2wKBgQDEb+/w57KCKWReEwkGXnSDXKLUQhNt6aAS\nbz7Uurku9adud0ytuyrXOF9pTTL6ckZWeeuvR0GIN3RRBBs+ErwJXidNzBB8vEax\n4kzVDavJGDiMwERj6OleZvSTjM0Wv3aP6t/vBABYioe5QmMLpHnmvM2Wj/QKNcCz\nSPycIBX0LwKBgGKn/dtjdaXS4v8Q6krRLF58WANjUikTxovCN7lXqnco8E1nNezO\n8BNT2QbkHaLXasQ42d1kYmn+P7o766eRiPaj9WtxM7gwcsQsJ0d8ISSilu/0YXbp\ng50mRqQPXSHeulsgx4Vk2nVdZ4pTC9Q6abnoMwmvTgakuTbo/tlvIFa7AoGBAKKE\nKXKZfioJrKvX+8N1Kdf0MBKDiCeK/Y/C0ayVvteHDTprINkq3EqqrOUlpWNmX6Lz\nw3WD8keL+YN9bjxwq3jkmIfYqFtKOQK6Qu6RHOqGS2LHPs2ZyFj9vKLF/ncveBuh\nKhtIqDCYi6lNrzvWm7O1yDEkb7ZyujaZz8QrF36pAoGAZXgNjlAcmGkZqJfuRCRH\nODH7nm51zbmg2ZKduDFO6hUe2sfNNQbbdpxtst+z1MibCl8oGAy0Tw9ORMKZCiEy\nCUs2Lte7lfQ4scvPASmnz+TwH0VCHTPLKUmcU/irzY+8Gh6Rtu4GJ+sPGGFy1QV5\nuUYuibYeXI49LOdRR5s47oM=\n-----END PRIVATE KEY-----\n",
    GOOGLE_CLIENT_EMAIL: "madmin@mathranks-335315.iam.gserviceaccount.com",
    NEXT_PUBLIC_GOOGLE_ANALYTICS: "UA-213701410-1",
  },
};
