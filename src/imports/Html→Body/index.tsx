import svgPaths from "./svg-b5mnydkgsr";
import imgBackgroundOrnaments from "./8d96bc711f0882781b1d7150beb7c69977023eed.png";
import imgBalineseLotusIcon from "./773d5b91a0fddb9de907364ea8389d22192e13fd.png";
import imgDecorativeIcon from "./83c92fe5df0c0bb79bfb88815d2fa6fd9dfcd8c8.png";

function BalineseLotusIcon() {
  return (
    <div className="max-w-[294px] opacity-60 relative shrink-0 size-[32px]" data-name="Balinese Lotus Icon">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgBalineseLotusIcon} />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="bg-[rgba(148,118,92,0.3)] h-px relative shrink-0 w-[48px]" data-name="Horizontal Divider" />
      <BalineseLotusIcon />
      <div className="bg-[rgba(148,118,92,0.3)] h-px relative shrink-0 w-[48px]" data-name="Horizontal Divider" />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['EB_Garamond:Italic',sans-serif] font-normal italic justify-center leading-[0] relative shrink-0 text-[#94765c] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[22.75px]">Na tasya pratima asti yasya nama mahad yasah</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-center pt-[0.6px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['EB_Garamond:Italic',sans-serif] font-normal italic justify-center leading-[0] relative shrink-0 text-[#94765c] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">(Yajur Weda 32:3)</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['EB_Garamond:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1d1b18] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[22.75px] mb-0">Tuhan tidak berwujud dan tidak dapat dibatasi oleh</p>
        <p className="leading-[22.75px]">rupa, namun kemuliaan-Nya meliputi segala sesuatu.</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[7.4px] items-start pt-[8px] relative shrink-0 w-full" data-name="Container">
      <Container3 />
      <Container4 />
      <Container5 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[318px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['EB_Garamond:Italic',sans-serif] font-normal italic justify-center leading-[0] relative shrink-0 text-[#94765c] text-[15px] text-center whitespace-nowrap">
        <p className="leading-[28px]">{`"Semoga pikiran yang baik datang dari segala penjuru"`}</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-[rgba(79,69,61,0.6)] text-center tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">ANO BHADRAH KRATAVO YANTU VISHVATAH</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container7 />
      <Container8 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-[318px]" data-name="Container">
      <Container1 />
      <Container2 />
      <Container6 />
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[32px] relative shrink-0" data-name="Margin">
      <Container />
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['EB_Garamond:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[24px] text-center text-white whitespace-nowrap">
          <p className="leading-[32px]">00</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#72573f] content-stretch flex items-center justify-center p-px relative rounded-[12px] shrink-0 size-[64px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[rgba(148,118,92,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container11 />
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-start pb-[8px] relative shrink-0 w-[64px]" data-name="Margin">
      <BackgroundBorder />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-w-px relative" data-name="Container">
      <Margin2 />
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#94765c] text-[10px] text-center tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">HARI</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['EB_Garamond:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[24px] text-center text-white whitespace-nowrap">
          <p className="leading-[32px]">00</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-[#72573f] content-stretch flex items-center justify-center p-px relative rounded-[12px] shrink-0 size-[64px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[rgba(148,118,92,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container13 />
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-start pb-[8px] relative shrink-0 w-[64px]" data-name="Margin">
      <BackgroundBorder1 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-w-px relative" data-name="Container">
      <Margin3 />
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#94765c] text-[10px] text-center tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">JAM</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['EB_Garamond:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[24px] text-center text-white whitespace-nowrap">
          <p className="leading-[32px]">00</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="bg-[#72573f] content-stretch flex items-center justify-center p-px relative rounded-[12px] shrink-0 size-[64px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[rgba(148,118,92,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container15 />
    </div>
  );
}

function Margin4() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-start pb-[8px] relative shrink-0 w-[64px]" data-name="Margin">
      <BackgroundBorder2 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-w-px relative" data-name="Container">
      <Margin4 />
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#94765c] text-[10px] text-center tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">MENIT</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['EB_Garamond:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[24px] text-center text-white whitespace-nowrap">
          <p className="leading-[32px]">00</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder3() {
  return (
    <div className="bg-[#72573f] content-stretch flex items-center justify-center p-px relative rounded-[12px] shrink-0 size-[64px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[rgba(148,118,92,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Container17 />
    </div>
  );
}

function Margin5() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-start pb-[8px] relative shrink-0 w-[64px]" data-name="Margin">
      <BackgroundBorder3 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-w-px relative" data-name="Container">
      <Margin5 />
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#94765c] text-[10px] text-center tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">DETIK</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container10 />
      <Container12 />
      <Container14 />
      <Container16 />
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[48px] relative shrink-0 w-full" data-name="Margin">
      <Container9 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['EB_Garamond:Italic',sans-serif] font-normal italic justify-center leading-[0] relative shrink-0 text-[#94765c] text-[24px] text-center whitespace-nowrap">
        <p className="leading-[32px]">Om Shanti Shanti Shanti Om</p>
      </div>
    </div>
  );
}

function Heading4Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[32px] relative shrink-0" data-name="Heading 4:margin">
      <Heading2 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-center pl-[5.3px] pr-[5.31px] relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(79,69,61,0.6)] text-center tracking-[1.6px] uppercase whitespace-nowrap">
        <p className="leading-[24px] mb-0">KELUARGA BESAR JERO MANGKU</p>
        <p className="leading-[24px]">TUBAN</p>
      </div>
    </div>
  );
}

function Margin6() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0" data-name="Margin">
      <Container18 />
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-center left-[24px] px-[24px] py-[48px] right-[24px] top-[1681.5px]" data-name="Footer">
      <Margin />
      <Margin1 />
      <Heading4Margin />
      <Margin6 />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['EB_Garamond:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1d1b18] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[22.75px] mb-0">Merupakan suatu kehormatan dan kebahagiaan bagi kami</p>
        <p className="leading-[22.75px] mb-0">apabila Bapak/Ibu/Saudara/i berkenan untuk</p>
        <p className="leading-[22.75px]">memberikan doa restu bagi putra kami.</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['EB_Garamond:Italic',sans-serif] font-normal italic justify-center leading-[0] relative shrink-0 text-[#94765c] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px]">Atas doa restunya, kami ucapkan terima kasih.</p>
      </div>
    </div>
  );
}

function SectionClosingMessage() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[24px] px-[16px] right-[24px] top-[1571px]" data-name="Section - Closing Message">
      <Container19 />
      <Container20 />
    </div>
  );
}

function DecorativeIcon() {
  return (
    <div className="max-w-[342px] opacity-40 relative shrink-0 size-[48px]" data-name="Decorative Icon">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-3.44%] max-w-none top-0 w-[106.89%]" src={imgDecorativeIcon} />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="Container">
      <DecorativeIcon />
    </div>
  );
}

function Container22() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[32px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['EB_Garamond:Italic',sans-serif] font-normal italic justify-center leading-[0] relative shrink-0 text-[#94765c] text-[16px] text-center whitespace-nowrap">
            <p className="leading-[26px] mb-0">{`"Atas asung kertha wara nugraha Ida Sang`}</p>
            <p className="leading-[26px]">{`Hyang Widhi Wasa"`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BalineseLotusIcon1() {
  return (
    <div className="max-w-[342px] opacity-60 relative shrink-0 size-[32px]" data-name="Balinese Lotus Icon">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgBalineseLotusIcon} />
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <div className="bg-[rgba(148,118,92,0.3)] h-px relative shrink-0 w-[48px]" data-name="Horizontal Divider" />
      <BalineseLotusIcon1 />
      <div className="bg-[rgba(148,118,92,0.3)] h-px relative shrink-0 w-[48px]" data-name="Horizontal Divider" />
    </div>
  );
}

function SectionHeaderText() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[30px] items-start left-[24px] right-[24px] top-[75px]" data-name="Section - Header Text">
      <Container21 />
      <Container22 />
      <Container23 />
    </div>
  );
}

function Container24() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pl-[33.42px] pr-[33.44px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['EB_Garamond:Italic',sans-serif] font-normal italic justify-center leading-[0] relative shrink-0 text-[#94765c] text-[16px] text-center tracking-[1.6px] whitespace-nowrap">
          <p className="leading-[24px]">Hari / Tanggal</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorderShadowOverlayBlur() {
  return (
    <div className="backdrop-blur-[2px] bg-[rgba(248,243,237,0.05)] relative rounded-[12px] self-stretch shrink-0 w-[342px]" data-name="Overlay+Border+Shadow+OverlayBlur">
      <div aria-hidden className="absolute border border-[rgba(148,118,92,0.2)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[33px] py-[13px] relative size-full">
          <Container24 />
          <div className="[word-break:break-word] flex flex-col font-['EB_Garamond:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1d1b18] text-[20px] whitespace-nowrap">
            <p className="leading-[28px]">Rabu, 05 Agustus 2026</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DateBadge() {
  return (
    <div className="content-stretch flex h-[78px] items-start justify-center relative shrink-0 w-full" data-name="Date Badge">
      <OverlayBorderShadowOverlayBlur />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['EB_Garamond:Italic',sans-serif] font-normal italic justify-center leading-[0] relative shrink-0 text-[#94765c] text-[16px] text-center tracking-[1.6px] whitespace-nowrap">
        <p className="leading-[24px]">Hari / Tanggal</p>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['EB_Garamond:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1d1b18] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Upacara Utama</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[113.25px]" data-name="Container">
      <Container28 />
      <Heading1 />
    </div>
  );
}

function Container26() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative size-full">
        <Container27 />
        <div className="relative shrink-0 size-[20px]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
            <path d={svgPaths.p39ac9700} fill="var(--fill-0, #94765C)" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[10.857px] relative shrink-0 w-[11.797px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="10.8567" preserveAspectRatio="none" viewBox="0 0 11.7967 10.8567" width="11.7967">
        <g id="Container">
          <path d={svgPaths.p22aa100} fill="var(--fill-0, #4F453D)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['EB_Garamond:Italic',sans-serif] font-normal italic justify-center leading-[0] relative shrink-0 text-[#4f453d] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">09.00 - 12.00 Wita</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container30 />
        <Container31 />
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[8.67px] relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['EB_Garamond:Italic',sans-serif] font-normal italic justify-center leading-[0] relative shrink-0 text-[#1d1b18] text-[16px] whitespace-nowrap">
        <p className="leading-[24px] mb-0">Pura Dalem Kahyangan Tuban, Kuta,</p>
        <p className="leading-[24px]">Bali</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start pb-[16px] relative size-full">
        <div className="h-[19.01px] relative shrink-0 w-[15.096px]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" height="19.0095" preserveAspectRatio="none" viewBox="0 0 15.0961 19.0095" width="15.0961">
            <path d={svgPaths.p28d827c0} fill="var(--fill-0, #94765C)" id="Icon" />
          </svg>
        </div>
        <Container33 />
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[16.923px] relative shrink-0 w-[17px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="16.923" preserveAspectRatio="none" viewBox="0 0 16.9999 16.923" width="16.9999">
        <g id="Container">
          <path d={svgPaths.p9aeff80} fill="var(--fill-0, #715B00)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link() {
  return (
    <div className="bg-[#fdd345] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] relative rounded-[4px] shrink-0 w-full" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.99px] items-center justify-center py-[16px] relative size-full">
        <Container34 />
        <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#715b00] text-[16px] text-center whitespace-nowrap">
          <p className="leading-[24px]">BUKA DI GOOGLE MAPS</p>
        </div>
      </div>
    </div>
  );
}

function Event() {
  return (
    <div className="bg-[#f8f3ed] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] relative rounded-[16px] shrink-0 w-full" data-name="Event 1">
      <div aria-hidden className="absolute border border-[rgba(148,118,92,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[33px] relative size-full">
        <Container26 />
        <Container29 />
        <Container32 />
        <Link />
      </div>
    </div>
  );
}

function BalineseLotusIcon2() {
  return (
    <div className="max-w-[342px] opacity-60 relative shrink-0 size-[32px]" data-name="Balinese Lotus Icon">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgBalineseLotusIcon} />
      </div>
    </div>
  );
}

function ImgBalineseLotusIconMargin() {
  return (
    <div className="content-stretch flex flex-col h-[32px] items-start max-w-[374px] px-[16px] relative shrink-0 w-[64px]" data-name="Img - Balinese Lotus Icon:margin">
      <BalineseLotusIcon2 />
    </div>
  );
}

function Divider() {
  return (
    <div className="content-stretch flex items-center justify-center py-[16px] relative shrink-0 w-full" data-name="Divider">
      <div className="bg-[rgba(148,118,92,0.3)] h-px relative shrink-0 w-[48px]" data-name="Horizontal Divider" />
      <ImgBalineseLotusIconMargin />
      <div className="bg-[rgba(148,118,92,0.3)] h-px relative shrink-0 w-[48px]" data-name="Horizontal Divider" />
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['EB_Garamond:Italic',sans-serif] font-normal italic justify-center leading-[0] relative shrink-0 text-[#94765c] text-[16px] text-center tracking-[1.6px] whitespace-nowrap">
        <p className="leading-[24px]">Hari / Tanggal</p>
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['EB_Garamond:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1d1b18] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">{`Resepsi & Jamuan`}</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[113.25px]" data-name="Container">
      <Container37 />
      <Heading3 />
    </div>
  );
}

function Container35() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative size-full">
        <Container36 />
        <div className="h-[20px] relative shrink-0 w-[15px]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 15 20" width="15">
            <path d={svgPaths.p23cfd7c0} fill="var(--fill-0, #94765C)" id="Icon" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="h-[10.857px] relative shrink-0 w-[11.797px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="10.8567" preserveAspectRatio="none" viewBox="0 0 11.7967 10.8567" width="11.7967">
        <g id="Container">
          <path d={svgPaths.p22aa100} fill="var(--fill-0, #4F453D)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container38() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container39 />
        <div className="[word-break:break-word] flex flex-col font-['EB_Garamond:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#4f453d] text-[16px] whitespace-nowrap">
          <p className="leading-[24px]">13.00 - Selesai</p>
        </div>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[4.56px] relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['EB_Garamond:Italic',sans-serif] font-normal italic justify-center leading-[0] relative shrink-0 text-[#1d1b18] text-[16px] whitespace-nowrap">
        <p className="leading-[24px] mb-0">Jl. Griya Mandala No. 8, Tuban, Kuta,</p>
        <p className="leading-[24px]">Bali</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start pb-[16.5px] relative size-full">
        <div className="h-[16.894px] relative shrink-0 w-[15px]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" height="16.8941" preserveAspectRatio="none" viewBox="0 0 14.9999 16.8941" width="14.9999">
            <path d={svgPaths.p32639c0} fill="var(--fill-0, #94765C)" id="Icon" />
          </svg>
        </div>
        <Container41 />
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="relative shrink-0 size-[18.731px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="18.7307" preserveAspectRatio="none" viewBox="0 0 18.7307 18.7307" width="18.7307">
        <g id="Container">
          <path d={svgPaths.p14344180} fill="var(--fill-0, #715B00)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link1() {
  return (
    <div className="bg-[#fdd345] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] relative rounded-[4px] shrink-0 w-full" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7.99px] items-center justify-center py-[16px] relative size-full">
        <Container42 />
        <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#715b00] text-[16px] text-center whitespace-nowrap">
          <p className="leading-[24px]">BUKA DI GOOGLE MAPS</p>
        </div>
      </div>
    </div>
  );
}

function Event1() {
  return (
    <div className="bg-[#f8f3ed] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] relative rounded-[16px] shrink-0 w-full" data-name="Event 2">
      <div aria-hidden className="absolute border border-[rgba(148,118,92,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[15.5px] items-start p-[33px] relative size-full">
        <Container35 />
        <Container38 />
        <Container40 />
        <Link1 />
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col gap-[25px] items-start relative shrink-0 w-full" data-name="Container">
      <Event />
      <Divider />
      <Event1 />
    </div>
  );
}

function SectionScheduleLocation() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[24px] right-[24px] top-[659.25px]" data-name="Section - Schedule & Location">
      <DateBadge />
      <Container25 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 1">
      <div className="[word-break:break-word] flex flex-col font-['EB_Garamond:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#72573f] text-[24px] text-center tracking-[-0.9px] whitespace-nowrap">
        <p className="leading-[40px]">Wayan Anggara Wijaya</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['EB_Garamond:Italic',sans-serif] font-normal italic justify-center leading-[0] relative shrink-0 text-[#94765c] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[22.75px] mb-0">Devan bhavayatanena te deva bhavayantu vah</p>
        <p className="leading-[22.75px]">parasparam bhavayantah sreyah param avapsyatha</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['EB_Garamond:Italic',sans-serif] font-normal italic justify-center leading-[0] relative shrink-0 text-[#94765c] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[22.75px]">(Bhagavad Gita 3:11)</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['EB_Garamond:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1d1b18] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[22.75px] mb-0">Dengan ini (Yadnya), kami berbakti kepada Hyang Widhi</p>
        <p className="leading-[22.75px] mb-0">dan dengan ini pula Hyang Widhi memelihara dan</p>
        <p className="leading-[22.75px] mb-0">mengasihi kamu. Dengan saling memelihara satu sama</p>
        <p className="leading-[22.75px]">lain, kamu akan mencapai kebaikan yang maha tinggi.</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] relative size-full">
        <Container44 />
        <Container45 />
        <Container46 />
      </div>
    </div>
  );
}

function BalineseLotusIcon3() {
  return (
    <div className="max-w-[342px] opacity-60 relative shrink-0 size-[32px]" data-name="Balinese Lotus Icon">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgBalineseLotusIcon} />
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center pt-[8.6px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-[rgba(148,118,92,0.3)] h-px relative shrink-0 w-[48px]" data-name="Horizontal Divider" />
      <BalineseLotusIcon3 />
      <div className="bg-[rgba(148,118,92,0.3)] h-px relative shrink-0 w-[48px]" data-name="Horizontal Divider" />
    </div>
  );
}

function Section() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[23.4px] items-start left-[24px] right-[24px] top-[297px]" data-name="Section">
      <Heading />
      <Container43 />
      <Container47 />
    </div>
  );
}

function Container48() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="22" preserveAspectRatio="none" viewBox="0 0 22 22" width="22">
        <g id="Container">
          <path d={svgPaths.p27114680} fill="var(--fill-0, #94765C)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#94765c] text-[10px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">INVITATION</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <Container48 />
        <Container49 />
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="h-[19.115px] relative shrink-0 w-[17px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="19.1153" preserveAspectRatio="none" viewBox="0 0 16.9999 19.1153" width="16.9999">
        <g id="Container">
          <path d={svgPaths.p111fd980} fill="var(--fill-0, #4F453D)" fillOpacity="0.6" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[10px] text-[rgba(79,69,61,0.6)] uppercase whitespace-nowrap">
        <p className="leading-[15px]">SCHEDULE</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <Container50 />
        <Container51 />
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="h-[20.5px] relative shrink-0 w-[19.5px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" height="20.5" preserveAspectRatio="none" viewBox="0 0 19.5 20.5" width="19.5">
        <g id="Container">
          <path d={svgPaths.p26223080} fill="var(--fill-0, #4F453D)" fillOpacity="0.6" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Manrope:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[10px] text-[rgba(79,69,61,0.6)] uppercase whitespace-nowrap">
        <p className="leading-[15px]">LOCATION</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <Container52 />
        <Container53 />
      </div>
    </div>
  );
}

function BottomNavBar() {
  return (
    <div className="absolute bg-[#fef9f2] bottom-[87.75px] content-stretch drop-shadow-[0px_-4px_10px_rgba(148,118,92,0.05)] flex gap-[69.3px] items-center left-0 pb-[24px] pt-[13px] px-[50.64px] rounded-tl-[24px] rounded-tr-[24px] w-[390px]" data-name="Bottom NavBar">
      <div aria-hidden className="absolute border-[rgba(148,118,92,0.1)] border-solid border-t inset-0 pointer-events-none rounded-tl-[24px] rounded-tr-[24px]" />
      <Link2 />
      <Link3 />
      <Link4 />
    </div>
  );
}

function Main() {
  return (
    <div className="h-[2604.75px] max-w-[600px] min-h-[780px] relative shrink-0 w-full" data-name="Main">
      <div className="absolute bg-size-[512px_512px] bg-top-left inset-[2205px_0_87.75px_0] opacity-40" style={{ backgroundImage: `url("${imgBackgroundOrnaments}")` }} data-name="Background Ornaments" />
      <div className="absolute bg-size-[512px_512px] bg-top-left inset-[0_0_1083.75px_0] opacity-40" style={{ backgroundImage: `url("${imgBackgroundOrnaments}")` }} data-name="Background Ornaments" />
      <Footer />
      <SectionClosingMessage />
      <SectionHeaderText />
      <SectionScheduleLocation />
      <Section />
      <BottomNavBar />
    </div>
  );
}

export default function HtmlBody() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[165.25px] relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(254, 249, 242) 0%, rgb(254, 249, 242) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Html → Body">
      <Main />
    </div>
  );
}