import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import { getArticleBySlug } from "@/lib/articles";

const article = getArticleBySlug("disposable-vapes-banned-what-to-use-instead")!;

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
        If you walked into a shop after 1 June 2025 looking for your usual disposable
        and came away empty-handed, you weren&apos;t doing anything wrong. Single-use
        vapes stopped being legal to sell anywhere in the UK on that date. It caught a
        lot of people out, mostly because the devices themselves didn&apos;t change,
        just the rules around selling them.
      </p>
      <p>
        The good news is you don&apos;t need to give up vaping to follow the rules, and
        you don&apos;t need to become a hobbyist who tinkers with coils and wattage
        either. A small refillable pod kit can do almost everything your old disposable
        did. This guide covers what changed, why a pod kit is the natural next step,
        and what to actually look for.
      </p>

      <h2>What changed on 1 June 2025</h2>
      <p>
        Under the Environmental Protection (Single-use Vapes) (England) Regulations
        2024, and equivalent regulations covering Scotland, Wales and Northern Ireland,
        it became illegal to sell or supply single-use vapes anywhere in the UK from 1
        June 2025. The regulations target disposability specifically: devices that
        aren&apos;t designed to be recharged or refilled. Manufacturing and importing
        disposables for UK sale stopped too, so this wasn&apos;t a case of shops
        quietly selling through old stock.
      </p>
      <p>
        The ban was introduced largely on environmental grounds, single-use vapes were
        ending up in general waste and litter in huge numbers, with batteries inside
        them that shouldn&apos;t go in a bin at all. Reusable and refillable vapes
        weren&apos;t affected. If a device has a rechargeable battery and a pod or tank
        you can refill, it&apos;s still entirely legal to buy and sell.
      </p>

      <h2>Why a pod kit is the easiest swap</h2>
      <p>
        Disposables were popular because they were simple: no settings, no spare parts,
        just puff and go. A lot of vapers assume the alternative means learning about
        ohms and wattage, but that&apos;s only true if you go looking for it. The
        category of device that replaced disposables in most people&apos;s pockets is
        the compact pod kit, and the simplest ones are deliberately built to feel almost
        identical to what you had before.
      </p>
      <p>
        You charge it instead of throwing it away, and you swap or refill a pod instead
        of buying a new device. Everything else, the size, the way you hold it, the
        draw when you inhale, is designed to feel familiar. We go into far more detail
        on the specific features worth comparing in{" "}
        <Link href="/guides/refillable-pod-kits-that-feel-like-a-disposable">
          our guide to refillable pod kits that feel like a disposable
        </Link>
        , but the short version is: you&apos;re not choosing between &quot;disposable
        simplicity&quot; and &quot;proper vaping kit&quot;, you can have both.
      </p>

      <h2>What to look for in a replacement</h2>
      <ul>
        <li>
          <strong>Compact size.</strong> Look for something close to the size of a
          disposable rather than a boxy mod, if pocketability was part of what you
          liked.
        </li>
        <li>
          <strong>Simple controls.</strong> Plenty of pod kits are button-free (draw
          activated) or have a single button, so there&apos;s nothing new to learn.
        </li>
        <li>
          <strong>Pod capacity.</strong> UK regulations cap prefilled pods and tanks at
          2ml of e-liquid, so most compact kits sit around that mark regardless of
          brand.
        </li>
        <li>
          <strong>Battery life.</strong> Battery size is usually listed in mAh. Higher
          numbers mean longer between charges, which matters more if you vape
          throughout the day.
        </li>
        <li>
          <strong>Coil options.</strong> A device with a couple of coil resistance
          choices lets you fine-tune flavour and draw without changing devices.
        </li>
      </ul>

      <h2>Disposable versus reusable, side by side</h2>
      <table>
        <thead>
          <tr>
            <th>Feature</th>
            <th>Disposable (now banned)</th>
            <th>Compact reusable pod kit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Battery</td>
            <td>Built in, thrown away with the device</td>
            <td>Rechargeable, typically over USB-C</td>
          </tr>
          <tr>
            <td>E-liquid</td>
            <td>Sealed inside, fixed flavour</td>
            <td>Refillable, or swap prefilled pods</td>
          </tr>
          <tr>
            <td>Upfront cost</td>
            <td>Low per device, repeated often</td>
            <td>One-off kit cost, typically £10 to £20</td>
          </tr>
          <tr>
            <td>Ongoing cost</td>
            <td>A new device every time it runs out</td>
            <td>E-liquid and occasional replacement coils</td>
          </tr>
          <tr>
            <td>Legal to buy in the UK</td>
            <td>No, since 1 June 2025</td>
            <td>Yes</td>
          </tr>
        </tbody>
      </table>

      <h2>What about flavours and nicotine strength</h2>
      <p>
        Nothing has changed here. UK-regulated nicotine e-liquid is still capped at
        20mg/ml under the Tobacco and Related Products Regulations, the same limit that
        applied to disposables, and you&apos;ll find the same broad range of fruit,
        menthol, tobacco and dessert flavours in bottle or prefilled pod form. If your
        disposable was a particular nicotine strength, checking the mg/ml figure on a
        bottle or pod is the easiest way to match it.
      </p>
      <p>
        As with any vaping product, you need to be 18 or over to buy one, and retailers
        are required to check. According to the NHS, vaping is not risk-free, but for
        adults who already smoke, public health guidance from bodies such as the NHS
        and OHID positions it as a much less harmful alternative to smoking and a tool
        that can support quitting. It isn&apos;t intended for anyone who doesn&apos;t
        already smoke or vape, and particularly not for under-18s.
      </p>

      <h2>Getting started this week</h2>
      <p>
        You don&apos;t need to research for hours. Walk into any vape shop, or browse
        one online, and ask for a &quot;pod kit&quot; rather than a specific brand
        name. Mention the flavour and roughly the nicotine strength you used before,
        and whether you preferred a tighter or looser draw. Most staff will point you
        towards two or three sensible options in the £10 to £20 range, and you can
        build from there.
      </p>
    </ArticleLayout>
  );
}
