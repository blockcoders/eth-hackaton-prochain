"use client"
import { PropsWithChildren } from "react";
import { WagmiConfig, createConfig, mainnet } from 'wagmi'
import { createPublicClient, http } from 'viem'

const config = createConfig({
  autoConnect: true,
  publicClient: createPublicClient({
    chain: mainnet,
    transport: http()
  }),
})


export const WagmiProvider = ({ children }: PropsWithChildren) => {
  return (
    <WagmiConfig config={config}>
      {children}
    </WagmiConfig>
  )
}