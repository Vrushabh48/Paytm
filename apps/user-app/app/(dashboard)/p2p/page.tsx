import { getServerSession } from "next-auth";
import { SendCard } from "../../../components/SendCard";
import { authOptions } from "../../lib/auth";
import prisma from "@repo/db/client";
import { P2PTransfers } from "../../../components/P2PTransfers";

async function getP2Ptransactions(){
    const session = await getServerSession(authOptions);
    const txns = await prisma.p2pTransfer.findMany({
        where: {
            fromUserId: Number(session?.user?.id)
        }
    });
    return txns.map(t => ({
        time: t.timestamp,
        amount: t.amount,
        toUserId: t.toUserId,
    }));
}

export default async function() {
    const transactions = await getP2Ptransactions();
    return <div className="w-full">
        <SendCard />
        <div>
            <h1>P2P Transaction History</h1>
            <P2PTransfers transactions={transactions} />
        </div>
    </div>
}