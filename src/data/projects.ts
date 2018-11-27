import { IProject } from "../lib/types";
import { Type, ProjectType } from "../lib/enums";

export const Projects: IProject[] = [
  {
    title: "lightning.rocks",
    openSource: true,
    projectType: ProjectType.Education,
    description: "Explore the lightning ecosystem.",
    url: "https://lightning.rocks",
    type: Type.Project
  },
  {
    title: "Lightning Network Daemon (LND)",
    openSource: true,
    projectType: ProjectType.Tool,
    description:
      "The Lightning Network Daemon (lnd) is a complete Lightning network node implemented in golang.",
    url: "https://github.com/lightningnetwork/lnd",
    type: Type.Project,
    tags: ["node", "wallet"]
  },
  {
    title: "c-lightning",
    openSource: true,
    projectType: ProjectType.Tool,
    description:
      "c-lightning is a Lightning network node being implemented in C.",
    url: "https://github.com/ElementsProject/lightning",
    type: Type.Project,
    tags: ["node", "wallet"]
  },
  {
    title: "Eclair",
    openSource: true,
    projectType: ProjectType.Wallet,
    description: "Eclair is a Lightning network node implemented in Scala.",
    url: "https://github.com/ACINQ/eclair",
    type: Type.Project,
    tags: ["node", "wallet"]
  },
  {
    title: "Eclair Wallet",
    openSource: true,
    projectType: ProjectType.Wallet,
    description: "A Lightning-enabled Bitcoin wallet for Android devices.",
    url: "https://github.com/ACINQ/eclair-wallet",
    type: Type.Project,
    tags: ["wallet", "android", "mobile"]
  },
  {
    title: "Lightning Desktop App",
    openSource: true,
    projectType: ProjectType.Wallet,
    description:
      "A cross-platform (Electron) desktop application to interact with LND.",
    url: "https://github.com/lightninglabs/lightning-app",
    type: Type.Project,
    tags: ["wallet", "desktop", "electron"]
  },
  {
    title: "Zap Wallet",
    openSource: true,
    projectType: ProjectType.Wallet,
    description: "Desktop and iOS wallets for the lightning network.",
    url: "https://zap.jackmallers.com/",
    type: Type.Project,
    tags: ["wallet", "desktop", "electron", "mobile", "iOS"],
    social: {
      github: "https://github.com/LN-Zap",
      twitter: "https://twitter.com/ln_zap",
      slack:
        "https://join.slack.com/t/zaphq/shared_invite/enQtMzgyNDA2NDI2Nzg0LTQwZWQ2ZWEzOWFhMjRiNWZkZWMwYTA4MzA5NzhjMDNhNTM5YzliNDA4MmZkZWZkZTFmODM4ODJkYzU3YmI3ZmI"
    }
  },
  {
    title: "HTLC.me",
    openSource: true,
    projectType: ProjectType.Wallet,
    description:
      "Web wallet to quickly and easily interact with the Bitcoin Lightning testnet.",
    url: "https://htlc.me/",
    type: Type.Project,
    tags: ["wallet", "web"]
  },
  {
    title: "Y'alls",
    openSource: true,
    projectType: ProjectType.Lapp,
    description:
      "A blogging platform integrated with the Lightning network for unlocking articles.",
    url: "https://yalls.org/",
    type: Type.Project,
    tags: ["blogging", "lapp"]
  },
  {
    title: "Lightning Wallet",
    openSource: true,
    projectType: ProjectType.Wallet,
    description: "A Lightning wallet for Android devices",
    type: Type.Project,
    url: "https://lightning-wallet.com/",
    tags: ["wallet", "mobile", "android"],
    social: {
      github: "https://github.com/btcontract/lnwallet"
    }
  },
  {
    title: "rawtx",
    openSource: true,
    projectType: ProjectType.Wallet,
    description: "A Lightning wallet for Android and iOS devices",
    type: Type.Project,
    url: "https://rawtx.com/",
    tags: ["wallet", "mobile", "android"],
    social: {
      github: "https://github.com/rawtxapp"
    }
  },
  {
    title: "Spark Wallet",
    openSource: true,
    projectType: ProjectType.Wallet,
    description:
      "A minimalistic wallet GUI for c-lightning, accessible over the web or through mobile and desktop apps.",
    type: Type.Project,
    url: "https://github.com/shesek/spark-wallet",
    tags: ["wallet", "web"]
  },
  {
    title: "Shango",
    openSource: true,
    projectType: ProjectType.Wallet,
    description:
      "Mobile app with capable of interfacing with standard Lightning nodes or nodes run as a service.",
    type: Type.Project,
    url: "http://www.shangoapp.com/",
    tags: ["wallet", "mobile", "android", "iOS"],
    social: {
      github: "https://github.com/neogeno/shango-lightning-wallet/"
    }
  },
  {
    title: "Bitcoin Lightning Testnet Faucet",
    openSource: false,
    projectType: ProjectType.Tool,
    description: "Receive free, worthless, testnet Bitcoin via Lightning",
    type: Type.Project,
    url: "https://faucet.lightning.community/",
    tags: ["bitcoin faucet"]
  },
  {
    title: "Litecoin Lightning Testnet Faucet",
    openSource: false,
    projectType: ProjectType.Tool,
    description: "Receive free, worthless, testnet Litecoin via Lightning",
    type: Type.Project,
    url: "https://ltc.faucet.lightning.community/",
    tags: ["litecoin faucet"]
  },
  {
    title: "lnd.fun Admin Panel",
    openSource: true,
    projectType: ProjectType.Tool,
    description:
      "Web application to assist in administering a Lightning network node.",
    type: Type.Project,
    url: "http://lnd.fun/",
    tags: ["administration"]
  },
  {
    title: "1ML",
    openSource: false,
    projectType: ProjectType.Tool,
    description: "Lightning network search and analysis engine",
    type: Type.Project,
    url: "https://1ml.com/",
    tags: ["analytics", "search", "explorer"]
  },
  {
    title: "lncli-web",
    openSource: true,
    projectType: ProjectType.Tool,
    description:
      "Web interface to interact and administer a Lightning network node.",
    type: Type.Project,
    url: "https://github.com/mably/lncli-web",
    tags: ["administration"]
  },
  {
    title: "Starblocks",
    openSource: false,
    projectType: ProjectType.Lapp,
    description:
      "A Lightning app to buy fake coffees online for testnet Bitcoin.",
    type: Type.Project,
    url: "https://starblocks.acinq.co",
    tags: ["demo", "lapp"]
  },
  {
    title: "bitcoinfaucet.uo1.net",
    openSource: false,
    projectType: ProjectType.Tool,
    description: "A reliable way to get worthless testnet Bitcoin",
    type: Type.Project,
    url: "http://bitcoinfaucet.uo1.net",
    tags: ["bitcoin faucet"]
  },
  {
    title: "coinfaucet.eu",
    openSource: false,
    projectType: ProjectType.Tool,
    description:
      "Another reliable way to get worthless testnet Bitcoin but larger amounts at a time.",
    type: Type.Project,
    url: "https://coinfaucet.eu/en/btc-testnet/",
    tags: ["bitcoin faucet"]
  }
];

export default Projects;
