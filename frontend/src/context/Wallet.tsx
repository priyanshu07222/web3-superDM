import React from 'react'
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base"
import { ConnectionProvider, useWallet, WalletProvider } from "@solana/wallet-adapter-react"
import { WalletModalProvider, WalletMultiButton, WalletDisconnectButton } from "@solana/wallet-adapter-react-ui"
import "@solana/wallet-adapter-react-ui/styles.css";
import { Connection } from '@solana/web3.js';

export const Wallet = () => {
    const wallet = useWallet();
    const conne = new Connection("https://devnet.solana.com")

    return (
        <ConnectionProvider endpoint={"https://devnet.solana.com"}>
            <WalletProvider wallets={[]} autoConnect={false} >
                <WalletModalProvider>
                    <div className='flex gap-4'>

                        <WalletMultiButton className='bg-orange-500' />
                        {/* <WalletDisconnectButton /> */}
                    </div>
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    )
}
