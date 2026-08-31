# Bike Connect website deployment

The site deploys from `main` through the **Deploy to GitHub Pages** workflow.

## First deployment

1. Push `main` and confirm the GitHub Actions build and deploy jobs succeed.
2. Open the repository's **Settings → Pages** and select **GitHub Actions** as the source if it is not already selected.
3. Confirm the temporary `superturboryan.github.io/Bike-Connect` Pages URL loads the built site.

## Verify `bike-connect.app`

1. Open GitHub profile **Settings → Pages** (profile settings, not repository settings).
2. Select **Add a domain**, enter `bike-connect.app`, and copy the TXT record GitHub provides.
3. In Squarespace, open **Domains → bike-connect.app → DNS → DNS Settings** and add that TXT record.
4. Wait for the record to resolve, finish verification in GitHub, and leave the TXT record in place.

## Connect Squarespace DNS to GitHub Pages

Before changing DNS, return to the repository's **Settings → Pages**, enter `bike-connect.app` under **Custom domain**, and save it.

In Squarespace DNS, remove only default web-hosting or forwarding records that conflict with `@` or `www`. Do not remove email-related MX or TXT records. Add:

| Type | Name | Value |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| AAAA | `@` | `2606:50c0:8000::153` |
| AAAA | `@` | `2606:50c0:8001::153` |
| AAAA | `@` | `2606:50c0:8002::153` |
| AAAA | `@` | `2606:50c0:8003::153` |
| CNAME | `www` | `superturboryan.github.io` |

Do not create wildcard DNS records. Squarespace DNS changes can take 24–48 hours to propagate.

## Verify and enable HTTPS

Check the records after propagation:

```sh
dig bike-connect.app A +short
dig bike-connect.app AAAA +short
dig www.bike-connect.app CNAME +short
dig _github-pages-challenge-superturboryan.bike-connect.app TXT +short
```

When the repository's Pages settings show a successful DNS check and certificate, enable **Enforce HTTPS**. Confirm:

- `https://bike-connect.app` loads without a certificate warning.
- `https://www.bike-connect.app` redirects to the apex domain.
- `/support`, `/privacy`, and `/how-to-control-your-phone-with-shimano-di2-buttons` load directly.
- `https://bike-connect.app/sitemap.xml` and `https://bike-connect.app/robots.txt` are available.

After launch, update the App Store Connect and Google Play marketing, support, and privacy URLs to use `https://bike-connect.app`.

References: [GitHub domain verification](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages), [GitHub custom-domain setup](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site), [Squarespace DNS records](https://support.squarespace.com/hc/en-us/articles/360002101888-Adding-DNS-records-to-your-domain).
