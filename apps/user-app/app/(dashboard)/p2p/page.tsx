import { getServerSession } from "next-auth";
import { SendCard } from "../../../components/SendCard";
import { authOptions } from "../../lib/auth";
import prisma from "@repo/db/client";
import { P2P } from "../../../components/P2P";

async function getP2PTransactions(){
    const session = await getServerSession(authOptions);
    const txns = await prisma.p2pTransfer.findMany({
        where: {
            fromUserId: Number(session?.user?.id)
        }
    });
    return txns.map(t => ({
        toUser: t.toUserId,
        time: t.timestamp,
        amount: t.amount
    }))
}

export default async function () {
    const transactions = await getP2PTransactions();
  return (
  <div className=" flex gap-4"> {/* Added gap-4 for spacing */}
    <SendCard />
    <P2P transactions={transactions} />
  </div>

  );
}
