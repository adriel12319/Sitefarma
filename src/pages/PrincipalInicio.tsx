import { FunctionComponent, useCallback, useEffect } from "react";
import { Button } from "@mui/material";

const PrincipalInicio: FunctionComponent = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onRectangleButtonClick = useCallback(() => {
    // Please sync "Pagina inicial" to the project
  }, []);

  return (
    <div className="relative bg-white w-full h-[1080px] overflow-hidden text-center text-[35px] text-white font-inter">
      <img
        className="absolute top-[0px] left-[0px] w-[1922px] h-[1080px] object-cover"
        alt=""
        src="/fumacaroxaeazulempreto-1@2x.png"
      />
      <div className="absolute top-[79px] left-[140px] w-[1641.85px] overflow-hidden flex flex-row items-center justify-between">
        <div className="w-[1158px] overflow-hidden shrink-0 flex flex-row pt-px px-0 pb-0 box-border items-center justify-between">
          <div className="w-[306px] flex flex-row items-center justify-between">
            <img className="relative w-10 h-10" alt="" src="/subtract.svg" />
            <div className="relative font-extrabold">Farma Express</div>
          </div>
          <div className="w-[741px] flex flex-row items-center justify-between text-5xl font-palanquin-dark">
            <div className="relative font-medium">Inicio</div>
            <div className="relative font-medium">Remédios</div>
            <div className="relative font-medium">Sobre nós</div>
            <div className="relative font-medium">{`Depoimentos `}</div>
            <div className="relative">
              <b>Participe do projeto</b>
              <span className="font-medium">{` `}</span>
            </div>
          </div>
        </div>
        <img
          className="relative w-[331.85px] h-10"
          alt=""
          src="/pesquisar-e-login.svg"
        />
      </div>
      <div className="absolute top-[202px] left-[140px] w-[1653px] overflow-hidden flex flex-row items-start justify-between text-left text-[92px]">
        <div className="w-[533px] overflow-hidden shrink-0 flex flex-col items-center justify-end">
          <div className="w-[533px] flex flex-col items-start justify-start gap-[41px]">
            <div
              className="self-stretch relative font-extrabold [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0]"
              data-animate-on-scroll
            >
              O que está sentindo hoje?
            </div>
            <div className="self-stretch relative text-[23px] font-semibold">
              Selecione onde fica sua dor, para melhor ajudarmos.
            </div>
            <Button
              sx={{ width: 257 }}
              variant="contained"
              color="primary"
              href="/remedios"
            >
              Remédios
            </Button>
          </div>
        </div>
        <div className="w-32 h-[104px] flex flex-col items-center justify-start">
          <button
            className="cursor-pointer [border:none] p-0 bg-gainsboro relative rounded-[30px] [backdrop-filter:blur(70px)] w-32 h-[104px]"
            onClick={onRectangleButtonClick}
          />
          <img
            className="relative rounded-[42px] w-[132px] h-28 object-cover mt-[-104px]"
            alt=""
            src="/mikealger-1@2x.png"
          />
        </div>
      </div>
      <div className="absolute top-[857px] left-[557px] w-[1225px] overflow-hidden flex flex-row items-center justify-start gap-[20px] text-17xl">
        <div className="flex-1 rounded-21xl bg-darkgray [backdrop-filter:blur(70px)] flex flex-col py-[73px] pr-[43px] pl-[63px] items-start justify-start gap-[15px]">
          <b className="self-stretch relative">Melhor escolha</b>
          <img
            className="self-stretch relative max-w-full overflow-hidden h-[2.38px] shrink-0"
            alt=""
            src="/line-4.svg"
          />
          <div className="self-stretch relative text-xl text-left">
            <p className="m-0">Mais de 500 famílias ajudadas</p>
            <p className="m-0">em todo Brasil.</p>
          </div>
        </div>
        <div className="flex-1 rounded-21xl bg-darkgray [backdrop-filter:blur(70px)] flex flex-col py-[73px] pr-[19px] pl-[54px] items-start justify-start gap-[14px]">
          <div className="self-stretch h-[60px] overflow-hidden shrink-0 flex flex-col py-0 pr-0 pl-[3px] box-border items-start justify-start gap-[16px]">
            <b className="relative">Qualidade</b>
            <img className="relative w-72 h-px" alt="" src="/line-2.svg" />
          </div>
          <div className="self-stretch relative text-[18px] text-left">
            <p className="m-0">Sempre investindo em conhecimento</p>
            <p className="m-0">e infraestrutura.</p>
          </div>
        </div>
        <div className="flex-1 relative rounded-21xl bg-darkgray [backdrop-filter:blur(70px)] h-[307px]">
          <b className="absolute top-[73px] left-[62px]">Serviço</b>
          <div className="absolute top-[145px] left-[53px] text-xl text-left">
            <p className="m-0">{`Comprometimento e gestão `}</p>
            <p className="m-0">estão em nossas prioridades.</p>
          </div>
          <img
            className="absolute top-[130.63px] left-[54px] w-72 h-[2.37px]"
            alt=""
            src="/line-3.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default PrincipalInicio;
