import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import { getArticleBySlug } from "@/lib/articles";

const article = getArticleBySlug(
  "matching-your-old-disposables-nicotine-hit-with-the-right-nic-salt-strength"
)!;

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
        One thing that trips people up when they move to a refillable kit is
        realising, often for the first time, that they now have to actually pick a
        nicotine strength. A disposable never really asked you that question. This is
        a practical look at what nic salt strength options mean, and how to use what
        you already know about your old habit to pick sensibly rather than guessing.
      </p>

      <h2>Why your disposable never really gave you a choice</h2>
      <p>
        Most single-use disposables sold in the UK, whatever the brand, were sold at
        or close to the regulatory ceiling of 20mg/ml nicotine. There wasn&apos;t
        usually a &quot;low strength&quot; version sitting next to it on the shelf,
        so if you vaped a disposable at all, you were almost certainly vaping at the
        top of the UK&apos;s legal range without ever consciously choosing it. That
        matters now because a refillable kit doesn&apos;t default you into anything.
        You buy a bottle, and the strength on the label is the strength you get.
      </p>
      <p>
        For the background on why you&apos;re holding a refillable kit instead of a
        disposable in the first place, our{" "}
        <Link href="/guides/disposable-vapes-banned-what-to-use-instead">
          explainer on the UK disposable vape ban
        </Link>{" "}
        covers what changed and why. This guide picks up from there, at the point
        where you&apos;re standing in front of a wall of bottles trying to work out
        which mg figure is actually right for you.
      </p>

      <h2>What the strength options actually are</h2>
      <p>
        Nic salt e-liquid, the type most closed and refillable pod kits are designed
        around, is commonly sold in the UK in 5mg, 10mg and 20mg strengths, usually in
        10ml bottles at a standard 50/50 PG/VG mix built for a tighter, mouth-to-lung
        draw similar to what disposables used. Nic salts are generally described as
        giving a smoother throat hit at higher strengths than freebase e-liquid would,
        which is a formulation characteristic worth knowing rather than a claim about
        one being better for you. If you&apos;re new to nic salts and want a lower
        strength to start comparing against, something like{" "}
        <a
          href="https://localsupplies.co.uk/collections/elux-nic-salts"
          target="_blank"
          rel="noopener noreferrer"
        >
          Elux vape liquid 5mg
        </a>{" "}
        is a common lower-strength starting point, sitting well below the 20mg most
        disposables were sold at.
      </p>

      <h2>Translating a disposable habit into a bottle strength</h2>
      <p>
        The simplest starting point is to treat 20mg as your rough &quot;like for
        like&quot; match, since that&apos;s what most disposables were, and adjust
        from there once you&apos;ve actually used the kit for a week or two. A few
        things are worth weighing up before you settle on a number:
      </p>
      <ul>
        <li>
          <strong>How often you actually reached for the disposable.</strong> Someone
          who picked one up occasionally through the day is in a different position
          to someone who vaped almost constantly, even if both were on the same 20mg
          strength.
        </li>
        <li>
          <strong>Whether the switch itself has already changed your habit.</strong>{" "}
          A pod kit adds small bits of friction a disposable didn&apos;t have,
          charging it, refilling it, having it in a different pocket, and a lot of
          people find they simply use it less often without trying to.
        </li>
        <li>
          <strong>How the draw compares.</strong> If your new kit has a tighter or
          looser draw than your old disposable, that changes how much you actually
          take in per puff, separately from the mg figure on the bottle.
        </li>
      </ul>
      <p>
        If you&apos;re still deciding on the kit itself rather than just the
        e-liquid, our guide to{" "}
        <Link href="/guides/refillable-pod-kits-that-feel-like-a-disposable">
          refillable pod kits that feel like a disposable
        </Link>{" "}
        covers coil resistance and draw in more detail, both of which affect how a
        given nicotine strength actually feels in practice.
      </p>

      <h2>Why a lower strength like 5mg can work better than you&apos;d expect</h2>
      <p>
        It sounds counterintuitive to go from a 20mg disposable straight to a 5mg
        bottle, but for some people who&apos;ve already switched to a pod kit, it
        works out fine, and the reason usually isn&apos;t really about the strength
        itself. If the switch has already cut down how often you&apos;re vaping
        through the day, purely because a pod kit takes a bit more thought than a
        disposable did, then the total nicotine you&apos;re taking in can drop even
        before you touch the mg figure. Many vapers who notice that pattern find a
        lower strength keeps pace with a habit that&apos;s already changed, rather
        than needing to force it down separately.
      </p>
      <p>
        That&apos;s not a rule, and it won&apos;t hold for everyone. If you&apos;re
        vaping just as often as you did before, or you&apos;ve found yourself pulling
        harder or more frequently on a lower-strength bottle to get the same
        satisfaction, that&apos;s a sign 5mg is too big a jump and a 10mg or 20mg
        bottle is the more sensible match for now.
      </p>

      <h2>A simple way to test your own level</h2>
      <p>
        Because 10ml bottles are cheap relative to a disposable, typically a couple
        of pounds each, there&apos;s not much downside to testing rather than
        guessing. Buy one bottle at what you think is your match (20mg if you want a
        safe starting point closest to your old disposable), and one a step down.
        Use the higher strength as normal for a few days, then switch to the lower
        one for a similar stretch and pay attention to two things: whether you&apos;re
        reaching for the kit noticeably more often, and whether the throat hit feels
        thin or unsatisfying compared with before. If neither changes much, the lower
        strength is doing the job with less nicotine overall. If you&apos;re vaping
        more or it feels flat, step back up.
      </p>

      <h2>A few honest caveats</h2>
      <p>
        Nicotine needs vary a lot from person to person, and nothing here is a
        substitute for paying attention to how you actually feel on a given strength.
        We can&apos;t tell you which of 5mg, 10mg or 20mg is right for you specifically,
        only lay out how the options relate to what a disposable habit typically
        looked like. This isn&apos;t health advice and it isn&apos;t a claim that any
        one strength is safer or better than another, they&apos;re simply different
        points within the UK&apos;s legal 20mg/ml limit. If you&apos;re finding it
        hard to manage your nicotine use at any strength, that&apos;s worth raising
        with a pharmacist or GP rather than working it out through trial and error
        alone.
      </p>
    </ArticleLayout>
  );
}
