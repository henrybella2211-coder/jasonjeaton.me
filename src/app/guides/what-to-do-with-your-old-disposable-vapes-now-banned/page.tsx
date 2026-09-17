import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import { getArticleBySlug } from "@/lib/articles";

const article = getArticleBySlug("what-to-do-with-your-old-disposable-vapes-now-banned")!;

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
        If you&apos;ve still got a couple of old disposables lurking in a kitchen
        drawer or the bottom of a bag, you&apos;re not alone, and you haven&apos;t done
        anything wrong. The ban that came into force on 1 June 2025 stopped shops
        selling disposable vapes, it didn&apos;t make it illegal to own the ones you
        already had. What it does mean is there are now a lot of dead or half-used
        disposables sitting around UK homes with nowhere obvious to go. Here&apos;s
        what to actually do with them.
      </p>

      <h2>You&apos;re allowed to keep and use them</h2>
      <p>
        To be clear on the legal point first: personal possession of a single-use vape
        was never made an offence. According to{" "}
        <a
          href="https://www.gov.uk/guidance/single-use-vapes-ban"
          target="_blank"
          rel="noopener noreferrer"
        >
          GOV.UK&apos;s guidance on the single-use vapes ban
        </a>
        , the regulations target businesses selling or supplying disposables, not
        individuals who already own them. If you&apos;ve got a few left from before the
        ban, you can carry on using them until they run out. This guide is really about
        what to do once they&apos;re empty or broken, which is where most people get
        stuck. For the full picture of what changed and why, see our explainer on{" "}
        <Link href="/guides/disposable-vapes-banned-what-to-use-instead">
          the disposable vape ban and what to use instead
        </Link>
        .
      </p>

      <h2>Why they can&apos;t just go in the bin</h2>
      <p>
        Every disposable vape has a small built-in lithium-ion battery, the same
        broad type used in phones and laptops. That makes it electronic waste, not
        general rubbish, and it&apos;s covered by the UK&apos;s Waste Electrical and
        Electronic Equipment (WEEE) regulations. Putting one in a normal bin or a
        mixed recycling bin isn&apos;t just against the rules, it&apos;s genuinely
        risky. When a lithium battery gets crushed or punctured, by a bin lorry
        compactor or sorting machinery at a recycling centre, it can short-circuit and
        catch fire. UK councils and waste operators have reported a sharp rise in bin
        lorry and recycling-centre fires linked to batteries in general waste, and
        loose vapes are one of the most commonly cited causes.
      </p>
      <p>
        Beyond the fire risk, there&apos;s a straightforward environmental argument
        too. The battery, along with the small amount of copper and other recoverable
        material inside a vape, is worth reclaiming rather than sending to landfill.
        Recycling them properly keeps that material in use and keeps lithium out of
        general waste streams, where it doesn&apos;t break down safely.
      </p>

      <h2>Where to actually take them</h2>
      <p>
        You&apos;ve got a few genuinely easy options, and you don&apos;t need to hang
        on to a dead vape for weeks waiting for a special collection.
      </p>
      <ul>
        <li>
          <strong>Any shop that sells vapes.</strong> Retailers that sell vapes, in
          person or online, are legally required to take back used vapes and vape
          parts such as pods, coils and batteries for recycling, free of charge and
          regardless of the brand or whether you&apos;re buying anything. Most vape
          shops have a small collection box near the till.
        </li>
        <li>
          <strong>Large supermarkets and electricals retailers.</strong> Bigger stores
          that sell electrical goods or batteries are increasingly required to offer
          a small-electricals or battery take-back point too, so it&apos;s worth
          checking near the entrance or customer service desk.
        </li>
        <li>
          <strong>Your household waste recycling centre (HWRC).</strong> Every local
          authority tip has a dedicated area for batteries and small electricals,
          separate from general skips.
        </li>
        <li>
          <strong>A postcode locator.</strong> The industry-backed Recycle Your
          Electricals campaign lets you search by postcode for your nearest vape and
          battery recycling point, including shops and supermarkets near you.
        </li>
      </ul>
      <p>
        None of these involve any cost to you. The take-back duty exists precisely so
        that leftover devices don&apos;t end up in general waste because there was
        nowhere convenient to put them. If you&apos;ve got a small handful of old
        devices rather than just one, it&apos;s worth putting them all in a small box
        or bag by the door and dropping the lot off together next time you&apos;re
        passing a vape shop or supermarket, rather than trying to deal with them one
        at a time.
      </p>

      <h2>A few common questions</h2>
      <p>
        <strong>Do I need to take the battery out first?</strong> No, and you
        shouldn&apos;t try. Disposable vapes aren&apos;t designed to be opened by
        hand, and attempting to prise one apart to remove the battery separately is
        far more likely to cause an injury or a fire than simply handing the whole
        device in intact.
      </p>
      <p>
        <strong>What if I bought some from abroad, or before the ban, and they&apos;re
        still sealed?</strong> You can still use them. The ban stopped UK sale and
        supply from 1 June 2025, it didn&apos;t recall or ban devices already in
        people&apos;s possession, wherever they were bought.
      </p>
      <p>
        <strong>Can my council collect them at the kerbside with normal recycling?</strong>{" "}
        Almost never. Standard kerbside recycling collections aren&apos;t set up to
        handle lithium batteries safely, which is exactly why dedicated vape and
        battery collection points exist separately. Check your local authority&apos;s
        website if you&apos;re unsure what your area supports, but a vape shop or
        HWRC will take one regardless of what your council collects at the kerb.
      </p>

      <h2>What to do with one before you recycle it</h2>
      <p>
        You don&apos;t need to do anything complicated to a disposable vape before
        taking it for recycling, just don&apos;t try to take it apart, puncture it or
        burn it yourself. Keep it away from other loose batteries and away from heat
        (a hot car glovebox or a radiator shelf isn&apos;t a good place to store one
        while it waits to be dropped off), and take it in as it is. If a device has
        been damaged, is swollen, or is leaking, that&apos;s still fine to hand in at a
        collection point, just mention it if you&apos;re handing it to a member of
        staff rather than posting it in a self-service box.
      </p>

      <h2>If you&apos;re ready to stop using disposables altogether</h2>
      <p>
        Recycling what you&apos;ve got left is one thing, but if you&apos;re looking
        for something to replace disposables going forward, a small refillable pod
        kit is the closest match for most people. We cover what to look for, and how
        to keep the battery going through a full day, in{" "}
        <Link href="/guides/refillable-pod-kits-that-feel-like-a-disposable">
          our guide to refillable pod kits that feel like a disposable
        </Link>{" "}
        and{" "}
        <Link href="/guides/how-to-make-your-pod-kit-battery-last-all-day">
          how to make your pod kit battery last all day
        </Link>
        . Either way, once a device (disposable or reusable) reaches the end of its
        life, the same rule applies: it goes to a proper vape or electricals
        recycling point, never in the bin.
      </p>
    </ArticleLayout>
  );
}
