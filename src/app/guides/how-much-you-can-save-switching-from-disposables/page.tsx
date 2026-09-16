import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import { getArticleBySlug } from "@/lib/articles";

const article = getArticleBySlug("how-much-you-can-save-switching-from-disposables")!;

export const metadata: Metadata = {
  title: article.title,
  description: article.excerpt,
  alternates: { canonical: `/guides/${article.slug}` },
  openGraph: {
    title: article.title,
    description: article.excerpt,
    type: "article",
  },
};

export default function Page() {
  return (
    <ArticleLayout article={article}>
      <p>
        Everyone who switched away from disposables asks some version of the same
        question: is this actually cheaper, or does it just feel cheaper because
        you&apos;re not handing over £5 every few days? There&apos;s no single number
        that applies to everyone, because it depends entirely on how much you vape. But
        the maths is simple enough to do for yourself, so that&apos;s what this guide
        walks through.
      </p>

      <h2>Start with your own disposable habit</h2>
      <p>
        Before you can compare anything, you need a rough baseline. Think back to how
        often you bought a new disposable and roughly what it cost. Most people fell
        into one of a few patterns:
      </p>
      <ul>
        <li>Light use: one disposable every week or so, around £5 to £6 each.</li>
        <li>Moderate use: a new one every three to four days.</li>
        <li>Heavy use: a fresh device every one to two days.</li>
      </ul>
      <p>
        Multiply your typical price by how many you bought in a month and you&apos;ve
        got a real monthly figure to compare against, rather than an average that
        might not reflect your actual habit at all.
      </p>

      <h2>The one-off cost of switching</h2>
      <p>
        A compact pod kit suited to a former disposable user typically costs £10 to
        £20. That&apos;s the one genuinely new outlay, and it&apos;s a single purchase
        rather than a repeating one, assuming you look after the device. We go into
        what actually affects that price, and what specs to look for, in{" "}
        <Link href="/guides/refillable-pod-kits-that-feel-like-a-disposable">
          our guide to refillable pod kits that feel like a disposable
        </Link>
        .
      </p>

      <h2>The ongoing cost of a pod kit</h2>
      <p>
        After the kit itself, your recurring costs are e-liquid and the occasional
        replacement pod or coil. A 10ml bottle of nic salt e-liquid typically runs £3
        to £5, and how long it lasts depends heavily on how much you vape and which
        coil resistance you&apos;re using. Replacement pods or coils are usually £3 to
        £8 for a small pack, and most people replace one every couple of weeks.
      </p>

      <h2>A worked example</h2>
      <p>
        This isn&apos;t a case study or a claim about what any specific person spends,
        just an illustration of how the numbers tend to compare for a moderate user.
        Adjust the figures to match your own habit and the maths still holds.
      </p>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Disposables (before)</th>
            <th>Pod kit (after)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Typical weekly spend</td>
            <td>Roughly £15 to £20 (2 to 3 disposables)</td>
            <td>Roughly £5 to £8 (e-liquid plus occasional pods)</td>
          </tr>
          <tr>
            <td>One-off cost</td>
            <td>None, but repeats every purchase</td>
            <td>£10 to £20, once</td>
          </tr>
          <tr>
            <td>Rough monthly total</td>
            <td>£60 to £85</td>
            <td>£20 to £35 (plus the one-off kit in month one)</td>
          </tr>
        </tbody>
      </table>
      <p>
        On figures like these, a moderate user could plausibly be looking at saving
        somewhere in the region of half their previous monthly spend, once the kit
        itself is paid off in the first few weeks. Light users will see a smaller
        gap in cash terms, though still a real one. Heavy users, who were sometimes
        buying a disposable every day or two, tend to see the biggest difference,
        simply because they were paying the full price of a device that often on
        repeat.
      </p>

      <h2>Where the savings can disappear</h2>
      <p>
        A few habits quietly erase the savings for some people. Buying premium or
        imported e-liquid instead of standard UK-regulated bottles pushes the price up
        noticeably. Replacing pods more often than needed, rather than when the flavour
        actually starts to taste burnt or flat, adds unnecessary cost too. And losing
        or damaging the device itself means buying another one, which resets your
        one-off cost. None of this is really about the pod kit being expensive, it&apos;s
        the same kind of habits that would have made disposables more expensive too.
      </p>

      <h2>The honest caveat</h2>
      <p>
        These are rough, illustrative figures built from typical UK prices, not a
        guarantee of what you&apos;ll personally spend or save. Your actual costs
        depend on how much you vape, which e-liquid strength and flavour you prefer,
        and how carefully you look after your kit. For a closer look at what drives the
        price of the kit and its running costs, our guide to{" "}
        <Link href="/guides/refillable-pod-kits-that-feel-like-a-disposable">
          refillable pod kits that feel like a disposable
        </Link>{" "}
        covers the specs worth paying attention to before you buy.
      </p>
    </ArticleLayout>
  );
}
